// ===== QUESTION BANK =====
const questionBank = {
    ai: {
        easy: [
            { q: "What does AI stand for?", opts: ["Automated Input","Artificial Intelligence","Advanced Interface","Analog Integration"], ans: 1 },
            { q: "Which of these is an example of AI?", opts: ["Calculator","Spreadsheet","Chatbot","USB drive"], ans: 2 },
            { q: "What is Machine Learning?", opts: ["A type of computer memory","AI learning from data","Writing code manually","A type of processor"], ans: 1 },
            { q: "Which company created ChatGPT?", opts: ["Google","Meta","OpenAI","Microsoft"], ans: 2 },
            { q: "What does NLP stand for?", opts: ["Natural Language Processing","New Logic Program","Network Layer Protocol","None of these"], ans: 0 },
            { q: "A self-driving car is an example of:", opts: ["Big Data","Artificial Intelligence","Cloud Computing","Blockchain"], ans: 1 },
            { q: "What is a neural network inspired by?", opts: ["Computer circuits","The human brain","Social networks","The internet"], ans: 1 },
            { q: "Which of the following is an AI assistant?", opts: ["Chrome","Siri","Excel","Linux"], ans: 1 },
            { q: "What is 'training' in machine learning?", opts: ["Running code","Teaching a model with data","Installing software","Debugging errors"], ans: 1 },
            { q: "Deep Learning is a subset of:", opts: ["Blockchain","Web Development","Machine Learning","Cloud Computing"], ans: 2 },
        ],
        medium: [
            { q: "Which algorithm is commonly used for classification tasks?", opts: ["Linear Regression","K-Means","Decision Tree","PCA"], ans: 2 },
            { q: "What is overfitting in machine learning?", opts: ["Model too simple","Model performs well on training but not test data","Model trains too slowly","Too much training data"], ans: 1 },
            { q: "What is a confusion matrix used for?", opts: ["Data visualization","Evaluating classification models","Training neural nets","Feature selection"], ans: 1 },
            { q: "Which activation function outputs values between 0 and 1?", opts: ["ReLU","Tanh","Sigmoid","Softmax"], ans: 2 },
            { q: "What does CNN stand for in deep learning?", opts: ["Computer Neural Network","Convolutional Neural Network","Central Node Network","Clustered Node Net"], ans: 1 },
            { q: "Supervised learning requires:", opts: ["Unlabeled data","Labeled data","No data","Only test data"], ans: 1 },
            { q: "What is the purpose of a validation set?", opts: ["Train the model","Test final accuracy","Tune hyperparameters","Store raw data"], ans: 2 },
            { q: "Which technique reduces dimensions of data?", opts: ["Random Forest","PCA","SVM","KNN"], ans: 1 },
            { q: "What is reinforcement learning based on?", opts: ["Large datasets","Reward and punishment signals","Unlabeled clustering","Regression analysis"], ans: 1 },
            { q: "BERT is a model used for:", opts: ["Image recognition","Natural Language Processing","Game playing","Data storage"], ans: 1 },
        ],
        hard: [
            { q: "What is the vanishing gradient problem?", opts: ["GPU overheating","Gradients shrink as they backpropagate through many layers","Too many parameters","Loss function diverges"], ans: 1 },
            { q: "Which optimizer uses adaptive learning rates per parameter?", opts: ["SGD","Gradient Descent","Adam","Momentum"], ans: 2 },
            { q: "What is the purpose of dropout in neural networks?", opts: ["Speed up training","Prevent overfitting by randomly deactivating neurons","Increase model size","Normalize inputs"], ans: 1 },
            { q: "In transformers, what does 'attention' compute?", opts: ["Loss gradients","Weighted importance of tokens relative to each other","Activation functions","Pooling layers"], ans: 1 },
            { q: "What is the Bias-Variance tradeoff?", opts: ["Speed vs accuracy","Simplicity vs complexity causing underfitting vs overfitting","Memory vs speed","Train vs test split"], ans: 1 },
            { q: "Which distance metric does KNN commonly use?", opts: ["Cosine","Manhattan","Euclidean","Hamming"], ans: 2 },
            { q: "Gradient Boosting builds models:", opts: ["In parallel","Randomly","Sequentially, correcting prior errors","Using a single decision tree"], ans: 2 },
            { q: "In GAN, what does the discriminator do?", opts: ["Generate images","Distinguish real from fake data","Train the generator","Encode features"], ans: 1 },
            { q: "What is transfer learning?", opts: ["Moving data between servers","Applying a pre-trained model to a new task","Training multiple models together","Copying weights randomly"], ans: 1 },
            { q: "Which normalization technique stabilizes training by normalizing layer inputs?", opts: ["Dropout","L2 Regularization","Batch Normalization","Weight Decay"], ans: 2 },
        ]
    },
    webdev: {
        easy: [
            { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language","High Text Machine Language","Hyper Transfer Markup Language","None"], ans: 0 },
            { q: "Which tag is used for the largest heading?", opts: ["<h6>","<head>","<h1>","<title>"], ans: 2 },
            { q: "What does CSS stand for?", opts: ["Computer Style Sheets","Creative Style System","Cascading Style Sheets","Colorful Style Syntax"], ans: 2 },
            { q: "Which property changes text color in CSS?", opts: ["font-color","text-color","color","background-color"], ans: 2 },
            { q: "Which tag creates a hyperlink?", opts: ["<link>","<a>","<href>","<url>"], ans: 1 },
            { q: "JavaScript is primarily a:", opts: ["Markup language","Stylesheet language","Programming language","Database language"], ans: 2 },
            { q: "Which HTML tag embeds an image?", opts: ["<picture>","<img>","<src>","<media>"], ans: 1 },
            { q: "What does 'div' stand for in HTML?", opts: ["Divide","Division","Dynamic item view","Document item variable"], ans: 1 },
            { q: "Which CSS property controls element spacing inside the border?", opts: ["Margin","Border","Padding","Spacing"], ans: 2 },
            { q: "What symbol starts a CSS class selector?", opts: ["#","@",".","!"], ans: 2 },
        ],
        medium: [
            { q: "Which CSS display value makes elements stack in a column easily?", opts: ["block","flex","grid","inline"], ans: 1 },
            { q: "What does the 'box model' in CSS consist of?", opts: ["Content, border only","Content, padding, border, margin","Width and height only","Color, font, size"], ans: 1 },
            { q: "Which JavaScript method selects an element by ID?", opts: ["querySelector","getElementByClass","getElementById","selectById"], ans: 2 },
            { q: "What is the purpose of 'localStorage' in JS?", opts: ["Store files on server","Store data in browser persistently","Style elements","Make HTTP requests"], ans: 1 },
            { q: "Which HTML5 element is used for navigation links?", opts: ["<menu>","<nav>","<links>","<header>"], ans: 1 },
            { q: "What does 'responsive design' mean?", opts: ["Fast loading","Works on all screen sizes","Has animations","Uses dark mode"], ans: 1 },
            { q: "Which CSS unit is relative to the root element's font size?", opts: ["em","px","rem","%"], ans: 2 },
            { q: "What does JSON stand for?", opts: ["Java Source Object Node","JavaScript Object Notation","Java Serial Object Net","None"], ans: 1 },
            { q: "What is the default position value in CSS?", opts: ["relative","fixed","absolute","static"], ans: 3 },
            { q: "Which method adds a new item to the end of a JS array?", opts: ["append()","push()","add()","insert()"], ans: 1 },
        ],
        hard: [
            { q: "What is the event loop in JavaScript?", opts: ["A CSS animation loop","Mechanism handling async operations and callback queue","A for loop inside events","Server-side execution model"], ans: 1 },
            { q: "What is the difference between '==' and '===' in JS?", opts: ["No difference","=== checks type and value, == only value","== is faster","=== is for strings only"], ans: 1 },
            { q: "Which CSS property creates a new stacking context?", opts: ["display:block","z-index with position","float:left","overflow:auto"], ans: 1 },
            { q: "What is a closure in JavaScript?", opts: ["A way to close browser tabs","A function retaining access to its outer scope","A CSS selector","An event listener type"], ans: 1 },
            { q: "What does the 'defer' attribute in a script tag do?", opts: ["Blocks rendering","Loads script after HTML is parsed","Loads script asynchronously","Caches the script"], ans: 1 },
            { q: "CSS Grid 'fr' unit represents:", opts: ["Fixed ratio","A fractional unit of available space","Font ratio","Frame rate"], ans: 1 },
            { q: "What is the purpose of the 'virtual DOM' in React?", opts: ["Faster server responses","Efficiently updates only changed parts of the real DOM","Stores CSS variables","Manages routing"], ans: 1 },
            { q: "What is CORS?", opts: ["A CSS framework","Cross-Origin Resource Sharing — controlling cross-domain requests","A JS bundler","Cache control header"], ans: 1 },
            { q: "What does 'hoisting' mean in JavaScript?", opts: ["Moving elements up with CSS","Declarations moved to top of scope before execution","A type of event bubbling","Async function execution"], ans: 1 },
            { q: "What is the CSS 'specificity' hierarchy?", opts: ["Tag > Class > ID","ID > Class > Tag","Class > ID > Tag","All are equal"], ans: 1 },
        ]
    },
    general: {
        easy: [
            { q: "What does CPU stand for?", opts: ["Central Processing Unit","Computer Power Unit","Core Processing Utility","Central Program Unit"], ans: 0 },
            { q: "What is the function of RAM?", opts: ["Permanent storage","Temporary memory for running programs","Connect to internet","Power the CPU"], ans: 1 },
            { q: "What does 'WWW' stand for?", opts: ["World Wide Web","Wide Web World","Web World Wide","World Web Wire"], ans: 0 },
            { q: "Which company makes the Windows operating system?", opts: ["Apple","Google","Microsoft","IBM"], ans: 2 },
            { q: "What is a URL?", opts: ["A type of virus","Web address","Programming language","Storage device"], ans: 1 },
            { q: "What does PDF stand for?", opts: ["Printed Document File","Portable Document Format","Page Display Format","Public Data File"], ans: 1 },
            { q: "What is the main function of an operating system?", opts: ["Play games","Manage hardware and software resources","Connect to Wi-Fi","Edit photos"], ans: 1 },
            { q: "What is a browser?", opts: ["A type of database","Software to access the internet","An email client","A file compressor"], ans: 1 },
            { q: "What does 'GB' stand for in storage?", opts: ["Gigabyte","Gigabit","General Byte","Global Byte"], ans: 0 },
            { q: "What type of device is a keyboard?", opts: ["Output device","Storage device","Input device","Processing device"], ans: 2 },
        ],
        medium: [
            { q: "What is the difference between HDD and SSD?", opts: ["HDD is faster","SSD uses spinning disks","SSD is faster and has no moving parts","No difference"], ans: 2 },
            { q: "What protocol is used to send emails?", opts: ["HTTP","FTP","SMTP","SSH"], ans: 2 },
            { q: "What is a firewall?", opts: ["Hardware for cooling","Security system monitoring network traffic","Type of RAM","Wi-Fi booster"], ans: 1 },
            { q: "What is an IP address?", opts: ["Email address","Unique number identifying a device on a network","Website name","File type"], ans: 1 },
            { q: "What is open-source software?", opts: ["Paid software","Software with publicly available source code","Software only for Linux","Closed software"], ans: 1 },
            { q: "What does HTTP stand for?", opts: ["HyperText Transfer Protocol","High Tech Transfer Protocol","Hyper Text Type Protocol","None"], ans: 0 },
            { q: "Which of these is a programming language?", opts: ["Excel","PowerPoint","Python","Photoshop"], ans: 2 },
            { q: "What is cloud computing?", opts: ["Storing data in the sky","Delivering services over the internet","A type of processor","Weather forecasting tech"], ans: 1 },
            { q: "What is phishing?", opts: ["A coding technique","Cyber attack tricking users into revealing info","A data backup method","A type of compression"], ans: 1 },
            { q: "What is the binary number system based on?", opts: ["10 digits","8 digits","2 digits (0 and 1)","16 digits"], ans: 2 },
        ],
        hard: [
            { q: "What is the OSI model?", opts: ["A type of CPU","A 7-layer framework for networking protocols","An operating system","A database model"], ans: 1 },
            { q: "What is a 'race condition' in computing?", opts: ["CPU speed test","Bug where behavior depends on timing of events","A type of sorting algorithm","Memory overflow"], ans: 1 },
            { q: "What does RAID stand for?", opts: ["Random Access Integrated Drive","Redundant Array of Independent Disks","Rapid Archive Interface Device","Read And Input Data"], ans: 1 },
            { q: "What is a deadlock?", opts: ["System shutdown","Two processes waiting forever for each other's resources","Memory leak","CPU throttling"], ans: 1 },
            { q: "What is the difference between TCP and UDP?", opts: ["No difference","TCP is reliable and ordered, UDP is faster but unreliable","UDP is more secure","TCP is newer"], ans: 1 },
            { q: "What is a hash function used for?", opts: ["Encryption only","Mapping data to fixed-size values for fast lookup/verification","Sorting arrays","Compressing files"], ans: 1 },
            { q: "What is virtual memory?", opts: ["RAM on the GPU","Using disk space as extension of RAM","Cloud-based memory","Cache memory"], ans: 1 },
            { q: "What does BIOS stand for?", opts: ["Basic Input Output System","Binary Input Output Software","Boot Integrated OS","Base Input Output Storage"], ans: 0 },
            { q: "What is a buffer overflow attack?", opts: ["DDoS attack","Writing data beyond allocated memory to execute malicious code","SQL injection","Man-in-the-middle attack"], ans: 1 },
            { q: "What is the purpose of DNS?", opts: ["Secure connections","Translate domain names to IP addresses","Block viruses","Compress network traffic"], ans: 1 },
        ]
    }
};

// ===== STATE =====
let selectedTopic = null;
let selectedDiff = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let timer = null;
let timeLeft = 30;
let totalTime = 0;
let userAnswers = [];

// ===== TOPIC & DIFFICULTY SELECTION (wrapped in DOMContentLoaded) =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedTopic = card.dataset.topic;
            selectedDiff = null;
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
            document.getElementById('startQuizBtn').style.display = 'none';
            document.getElementById('difficultyRow').style.display = 'block';
            document.getElementById('difficultyRow').scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedDiff = btn.dataset.diff;
            document.getElementById('startQuizBtn').style.display = 'inline-block';
        });
    });

    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
    renderLeaderboard();
});

function startQuiz() {
    if (!selectedTopic || !selectedDiff) { alert('Please select topic and difficulty!'); return; }
    const pool = questionBank[selectedTopic][selectedDiff];
    currentQuestions = shuffleArray([...pool]).slice(0, 10);
    currentIndex = 0; score = 0; correctCount = 0; wrongCount = 0;
    totalTime = 0; userAnswers = [];

    document.getElementById('topicSection').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');
    document.getElementById('resultSection').classList.add('hidden');

    document.getElementById('quizTopicLabel').textContent = topicLabel(selectedTopic);
    document.getElementById('quizDiffLabel').textContent = selectedDiff.charAt(0).toUpperCase() + selectedDiff.slice(1);
    document.getElementById('qTotal').textContent = currentQuestions.length;

    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = selectedDiff === 'easy' ? 40 : selectedDiff === 'medium' ? 30 : 20;
    document.getElementById('timerDisplay').textContent = timeLeft;
    document.getElementById('nextBtn').style.display = 'none';

    const q = currentQuestions[currentIndex];
    document.getElementById('questionText').textContent = (currentIndex + 1) + '. ' + q.q;
    document.getElementById('qNum').textContent = currentIndex + 1;
    document.getElementById('scoreDisplay').textContent = score;
    document.getElementById('progressBar').style.width = ((currentIndex / currentQuestions.length) * 100) + '%';

    const grid = document.getElementById('optionsGrid');
    grid.innerHTML = '';
    q.opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => selectAnswer(i, btn));
        grid.appendChild(btn);
    });

    startTimer();
}

function startTimer() {
    const display = document.getElementById('timerDisplay');
    const startTime = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        display.textContent = timeLeft;
        if (timeLeft <= 5) display.style.color = '#dc3545';
        else display.style.color = 'var(--accent)';
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeExpired();
        }
    }, 1000);
}

function timeExpired() {
    const q = currentQuestions[currentIndex];
    userAnswers.push({ q: q.q, selected: -1, correct: q.ans, opts: q.opts });
    wrongCount++;
    highlightAnswer(-1, q.ans);
    document.getElementById('nextBtn').style.display = 'inline-block';
    totalTime += (selectedDiff === 'easy' ? 40 : selectedDiff === 'medium' ? 30 : 20);
}

function selectAnswer(index, btn) {
    clearInterval(timer);
    const q = currentQuestions[currentIndex];
    const timeUsed = (selectedDiff === 'easy' ? 40 : selectedDiff === 'medium' ? 30 : 20) - timeLeft;
    totalTime += timeUsed;
    userAnswers.push({ q: q.q, selected: index, correct: q.ans, opts: q.opts });

    if (index === q.ans) {
        score += selectedDiff === 'easy' ? 5 : selectedDiff === 'medium' ? 8 : 12;
        correctCount++;
    } else {
        wrongCount++;
    }
    highlightAnswer(index, q.ans);
    document.getElementById('nextBtn').style.display = 'inline-block';
}

function highlightAnswer(selected, correct) {
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) btn.classList.add('correct');
        else if (i === selected) btn.classList.add('wrong');
    });
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentQuestions.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    clearInterval(timer);
    document.getElementById('quizSection').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');
    document.getElementById('progressBar').style.width = '100%';

    const total = currentQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const avgTime = totalTime > 0 ? Math.round(totalTime / total) : 0;

    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalCorrect').textContent = correctCount;
    document.getElementById('finalWrong').textContent = wrongCount;
    document.getElementById('finalTime').textContent = avgTime + 's';

    let icon, title, msg;
    if (percentage >= 80) {
        icon = '🏆'; title = 'Excellent!'; msg = 'Outstanding performance! You really know your stuff.';
    } else if (percentage >= 60) {
        icon = '👍'; title = 'Good Job!'; msg = 'Nice work! A bit more practice and you\'ll be at the top.';
    } else if (percentage >= 40) {
        icon = '📚'; title = 'Keep Learning'; msg = 'You\'re getting there! Review the topics and try again.';
    } else {
        icon = '💡'; title = 'Don\'t Give Up!'; msg = 'Every expert was once a beginner. Keep practicing!';
    }
    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMsg').textContent = msg;

    // Save to history
    saveScore(selectedTopic, selectedDiff, score, correctCount, total);
    renderLeaderboard();

    // Answer Review
    const review = document.getElementById('reviewArea');
    review.innerHTML = '<h3 style="font-family:Syne,sans-serif;font-weight:700;margin-bottom:16px;font-size:1.1rem;">Answer Review</h3>';
    userAnswers.forEach((a, i) => {
        const div = document.createElement('div');
        div.className = 'review-item ' + (a.selected === a.correct ? 'correct' : 'wrong');
        const selectedText = a.selected === -1 ? '<span class="review-wrong">Time Up</span>' : `<span class="${a.selected === a.correct ? 'review-correct' : 'review-wrong'}">${a.opts[a.selected]}</span>`;
        div.innerHTML = `<p class="review-q">Q${i+1}: ${a.q}</p>
            <p class="review-ans">Your Answer: ${selectedText} &nbsp;|&nbsp; Correct: <span class="review-correct">${a.opts[a.correct]}</span></p>`;
        review.appendChild(div);
    });

    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}

function retryQuiz() {
    startQuiz();
    document.getElementById('resultSection').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');
}

function goToTopics() {
    document.getElementById('resultSection').classList.add('hidden');
    document.getElementById('topicSection').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== LEADERBOARD =====
function saveScore(topic, diff, score, correct, total) {
    let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.unshift({
        topic: topicLabel(topic),
        diff: diff,
        score,
        correct,
        total,
        date: new Date().toLocaleDateString()
    });
    if (history.length > 10) history = history.slice(0, 10);
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

function renderLeaderboard() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const list = document.getElementById('leaderboardList');
    if (history.length === 0) {
        list.innerHTML = '<p class="no-scores">No scores yet. Take a quiz to get started!</p>';
        return;
    }
    list.innerHTML = history.map((h, i) =>
        `<div class="lb-item">
            <div>
                <strong>${i+1}. ${h.topic}</strong>
                <div class="lb-meta">${h.diff} • ${h.date}</div>
            </div>
            <div style="text-align:right">
                <div class="lb-score">${h.score} pts</div>
                <div class="lb-meta">${h.correct}/${h.total} correct</div>
            </div>
        </div>`
    ).join('');
}

function clearScores() {
    if (confirm('Clear all quiz history?')) {
        localStorage.removeItem('quizHistory');
        renderLeaderboard();
    }
}

// ===== HELPERS =====
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function topicLabel(t) {
    return { ai: 'Artificial Intelligence', webdev: 'Web Development', general: 'General Technology' }[t] || t;
}
