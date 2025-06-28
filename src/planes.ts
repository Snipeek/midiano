import {getEnharmonicNote} from '@/enharmonic';
const history = [];
let currentTime = 0;

window.historyhistory=history;

export const pushHistory = (item = { note: '', duration: 0, startTime: 0, endTime: 0, velocity: 0 }) => {
    history.push(item);

    return (updates) => {
        Object.assign(item, updates)
    }
}


const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = -1;
canvas.style.backgroundColor = '#111';

const ctx = canvas.getContext('2d');
ctx.font = '14px monospace';
ctx.textBaseline = 'top';



const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].map(a => getEnharmonicNote(a));
const OCTAVES = 8; // От C1 до C8
let KEY_WIDTH = 0; // Ширина клавиши
const PIXELS_PER_MS = 0.1; // Масштаб времени (1ms = 0.1px)
const SCROLL_SPEED = 1; // Скорость скролла

// Фиксируем размеры (чтобы не было размытия)
function resizeCanvas() {
    // Вычисляем ширину клавиши так, чтобы все ноты C1-C8 влезли в экран
    const totalNotes = NOTE_NAMES.length * OCTAVES;
    KEY_WIDTH = Math.max(20, window.innerWidth / totalNotes);
    
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    ctx.scale(devicePixelRatio, devicePixelRatio);
    
    // Отрисовка фона (опционально)
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();


// Функция для преобразования названия ноты в позицию X
function noteToX(noteName) {
    const note = noteName.slice(0, -1); // "C4" → "C"
    const octave = parseInt(noteName.slice(-1)); // "C4" → 4
    const noteIndex = NOTE_NAMES.indexOf(note);
    return (noteIndex + (octave - 1) * 12) * KEY_WIDTH;
}

function renderHistory() {
    const now = Date.now();
    const viewHeight = canvas.height / devicePixelRatio;
    
    // Очистка (можно сделать полупрозрачный фон для "шлейфа")
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Отрисовка всех нот истории
    history.forEach(item => {
        const x = noteToX(item.note);
        const durationHeight = item.duration * PIXELS_PER_MS;
        const y = viewHeight - (now - item.startTime) * PIXELS_PER_MS * SCROLL_SPEED;
        
        // Пропускаем невидимые элементы
        if (y + durationHeight < 0 || y > viewHeight) return;
        
        // Цвет: velocity → насыщенность, нота → оттенок
        const hue = NOTE_NAMES.indexOf(item.note.replace(/\d/g, '')) * 30;
        ctx.fillStyle = `hsla(${hue}, 80%, ${item.velocity * 70 + 30}%, 0.8)`;
        ctx.fillRect(x, y, KEY_WIDTH - 1, durationHeight);
        
        // Подпись ноты (если достаточно места)
        if (durationHeight > 20 && KEY_WIDTH > 25) {
            ctx.fillStyle = '#fff';
            ctx.font = `${Math.min(12, KEY_WIDTH * 0.5)}px Arial`;
            ctx.fillText(item.note, x + 2, y + 2);
        }
    });
    
    requestAnimationFrame(renderHistory);
}


// Запускаем рендер
renderHistory();