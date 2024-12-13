const maxSnowflakes = 100; // Максимальное количество снежинок
let currentSnowflakes = 0; // Текущее количество снежинок

const createSnowflake = () => {
    // Проверяем, не превышает ли текущее количество максимальное
    if (currentSnowflakes >= maxSnowflakes) {
        return; // Если достигнуто максимальное количество, выходим из функции
    }

    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄'; // Символ снежинки
    snowflake.style.left = Math.random() * 100 + 'vw'; // Случайное положение по горизонтали
    snowflake.style.fontSize = Math.random() * 1 + 0.5 + 'em'; // Случайный размер
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Случайная продолжительность анимации
    snowflake.style.opacity = Math.random(); // Случайная прозрачность
    document.body.appendChild(snowflake);

    currentSnowflakes++; // Увеличиваем текущее количество снежинок

    // Удаляем снежинку после завершения анимации
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        currentSnowflakes--; // Уменьшаем текущее количество снежинок при удалении
    });
};

// Генерируем снежинки каждые 300 миллисекунд
setInterval(createSnowflake, 300);