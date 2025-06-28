// Глобальные переменные для расчета BPM
let lastValidHitTime = 0;
const bpmHistory = [];
const activeNotes = new Set();
const MAX_HISTORY = 10;
const MIN_BEAT_INTERVAL = 50; // Минимальный интервал между ударами (мс)

// Функция для обновления BPM
export function updateBPM(config, noteKey) {
    const now = Date.now();
  
    // Добавляем ноту в активные
    activeNotes.add(noteKey);
    
    // Определяем, было ли это новое нажатие (а не продолжение удержания)
    const isNewHit = activeNotes.size === 1 || 
                    (now - lastValidHitTime) > MIN_BEAT_INTERVAL;
  
    if (isNewHit && lastValidHitTime > 0) {
      const delta = now - lastValidHitTime;
      
      // Фильтруем слишком быстрые "дребезжащие" нажатия
      if (delta >= MIN_BEAT_INTERVAL) {
        const currentBPM = Math.round(60000 / delta);
        
        // Обновляем историю
        bpmHistory.push(currentBPM);
        if (bpmHistory.length > MAX_HISTORY) {
          bpmHistory.shift();
        }
        
        // Рассчитываем среднее BPM
        const avgBPM = bpmHistory.length > 0
          ? Math.round(bpmHistory.reduce((sum, bpm) => sum + bpm, 0) / bpmHistory.length)
          : 0;
        
        // Обновляем конфиг
        config.currentBPM = currentBPM;
        config.averageBPM = avgBPM;
        
        lastValidHitTime = now;
      }
    } else if (lastValidHitTime === 0) {
      // Первое нажатие - только запоминаем время
      lastValidHitTime = now;
    }
}