// تحديد العناصر من الـ HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// وظيفة إضافة مهمة جديدة
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('add task');
        return;
    }

    // إنشاء عنصر قائمة جديد (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // ميزة إضافية: عند الضغط على المهمة يتم وضع خط عليها كأنها اكتملت (كما يظهر خلف الفيديو في صورتك)
    li.addEventListener('click', function() {
        li.classList.toggle('done');
    });

    // إضافة المهمة إلى القائمة المكتوبة
    taskList.appendChild(li);

    // تفريغ مربع الإدخال بعد الإضافة
    taskInput.value = '';
}

// تشغيل الوظيفة عند الضغط على زر Add
addBtn.addEventListener('click', addTask);

// تشغيل الوظيفة أيضاً عند الضغط على زر Enter في الكيبورد
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});