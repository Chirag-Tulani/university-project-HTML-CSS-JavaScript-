// ===== AI TOOLS DATA =====
const aiTools = [
    // WRITING
    { id: 1, name: 'ChatGPT', category: 'writing', price: 'freemium', desc: 'Versatile AI chatbot by OpenAI for writing, answering questions, brainstorming and much more.', tags: ['Chatbot', 'General AI'], url: 'https://chat.openai.com', color: '#10a37f', emoji: '🤖' },
    { id: 2, name: 'Claude', category: 'writing', price: 'freemium', desc: 'Anthropic\'s helpful and safe AI assistant for writing, analysis, coding and complex tasks.', tags: ['Chatbot', 'Writing'], url: 'https://claude.ai', color: '#cc785c', emoji: '✨' },
    { id: 3, name: 'Grammarly', category: 'writing', price: 'freemium', desc: 'AI-powered writing assistant that checks grammar, tone, clarity and style in real time.', tags: ['Grammar', 'Editing'], url: 'https://grammarly.com', color: '#15c39a', emoji: '📝' },
    { id: 4, name: 'Jasper', category: 'writing', price: 'paid', desc: 'AI writing platform for marketers and creators to generate blogs, ads and social media content.', tags: ['Marketing', 'Content'], url: 'https://jasper.ai', color: '#6c47ff', emoji: '🚀' },
    { id: 5, name: 'Copy.ai', category: 'writing', price: 'freemium', desc: 'Generates marketing copy, email content, product descriptions and more using AI.', tags: ['Copywriting', 'Marketing'], url: 'https://copy.ai', color: '#ff6b6b', emoji: '✍️' },
    { id: 6, name: 'Notion AI', category: 'writing', price: 'freemium', desc: 'Built into Notion workspace — helps summarize, rewrite, draft and brainstorm directly in your docs.', tags: ['Workspace', 'Notes'], url: 'https://notion.so', color: '#000000', emoji: '📄' },

    // CODING
    { id: 7, name: 'GitHub Copilot', category: 'coding', price: 'paid', desc: 'AI pair programmer by GitHub that suggests code completions and entire functions in your IDE.', tags: ['Code Completion', 'IDE'], url: 'https://github.com/features/copilot', color: '#24292e', emoji: '💻' },
    { id: 8, name: 'Cursor', category: 'coding', price: 'freemium', desc: 'AI-first code editor built on VS Code that can write, edit and explain code using natural language.', tags: ['IDE', 'Code Editor'], url: 'https://cursor.sh', color: '#2563eb', emoji: '⌨️' },
    { id: 9, name: 'Tabnine', category: 'coding', price: 'freemium', desc: 'AI code completion tool supporting many languages with privacy-first, offline mode options.', tags: ['Autocomplete', 'Privacy'], url: 'https://tabnine.com', color: '#6c47ff', emoji: '🔮' },
    { id: 10, name: 'Replit AI', category: 'coding', price: 'freemium', desc: 'Browser-based coding environment with AI assistant to help write, debug and explain code.', tags: ['Browser IDE', 'Learning'], url: 'https://replit.com', color: '#f26207', emoji: '🖥️' },
    { id: 11, name: 'Claude Code', category: 'coding', price: 'paid', desc: 'Agentic AI coding tool by Anthropic that works in terminal to write, edit and run entire codebases.', tags: ['Agentic', 'Terminal'], url: 'https://claude.ai/code', color: '#cc785c', emoji: '🛠️' },
    { id: 12, name: 'Codeium', category: 'coding', price: 'free', desc: 'Free AI code acceleration toolkit offering autocomplete, search and chat for developers.', tags: ['Free', 'Autocomplete'], url: 'https://codeium.com', color: '#09b6a2', emoji: '🆓' },

    // IMAGE
    { id: 13, name: 'Midjourney', category: 'image', price: 'paid', desc: 'High-quality AI image generation tool operated through Discord, known for artistic and photorealistic outputs.', tags: ['Art', 'Photorealistic'], url: 'https://midjourney.com', color: '#e91e63', emoji: '🎨' },
    { id: 14, name: 'DALL·E 3', category: 'image', price: 'freemium', desc: 'OpenAI\'s powerful image generation model accessible through ChatGPT and the API.', tags: ['OpenAI', 'Generation'], url: 'https://openai.com/dall-e-3', color: '#10a37f', emoji: '🖼️' },
    { id: 15, name: 'Stable Diffusion', category: 'image', price: 'free', desc: 'Open-source image generation model that can be run locally or via cloud services for maximum control.', tags: ['Open Source', 'Local'], url: 'https://stability.ai', color: '#9b59b6', emoji: '🌌' },
    { id: 16, name: 'Adobe Firefly', category: 'image', price: 'freemium', desc: 'Adobe\'s AI image tools integrated into Creative Cloud for generative fill, text effects and more.', tags: ['Adobe', 'Creative'], url: 'https://firefly.adobe.com', color: '#ff0000', emoji: '🔥' },
    { id: 17, name: 'Canva AI', category: 'image', price: 'freemium', desc: 'AI-powered design features inside Canva including image generation, background removal and magic resize.', tags: ['Design', 'No-code'], url: 'https://canva.com', color: '#00c4cc', emoji: '🎭' },

    // VIDEO
    { id: 18, name: 'Sora', category: 'video', price: 'paid', desc: 'OpenAI\'s text-to-video model generating high-quality, realistic video clips from text descriptions.', tags: ['Text-to-Video', 'OpenAI'], url: 'https://sora.com', color: '#10a37f', emoji: '🎬' },
    { id: 19, name: 'Runway ML', category: 'video', price: 'freemium', desc: 'AI creative suite for video generation, editing, background removal and visual effects.', tags: ['Creative', 'Editing'], url: 'https://runwayml.com', color: '#0f0f0f', emoji: '🎥' },
    { id: 20, name: 'Synthesia', category: 'video', price: 'paid', desc: 'Create professional AI avatar videos with voiceovers from text — great for training and presentations.', tags: ['Avatars', 'Training'], url: 'https://synthesia.io', color: '#5c47ff', emoji: '👤' },
    { id: 21, name: 'HeyGen', category: 'video', price: 'freemium', desc: 'AI video generator with realistic avatars, instant translation, and personalized video creation.', tags: ['Avatars', 'Translation'], url: 'https://heygen.com', color: '#ff6347', emoji: '🗣️' },

    // PRODUCTIVITY
    { id: 22, name: 'Notion AI', category: 'productivity', price: 'freemium', desc: 'AI-powered workspace for notes, tasks and wikis — helps draft, summarize and organize information.', tags: ['Notes', 'Tasks'], url: 'https://notion.so', color: '#000000', emoji: '📊' },
    { id: 23, name: 'Otter.ai', category: 'productivity', price: 'freemium', desc: 'AI meeting assistant that transcribes meetings in real-time with notes, summaries and action items.', tags: ['Transcription', 'Meetings'], url: 'https://otter.ai', color: '#1a73e8', emoji: '🎙️' },
    { id: 24, name: 'Motion', category: 'productivity', price: 'paid', desc: 'AI-powered calendar and task manager that automatically schedules your tasks based on priorities.', tags: ['Scheduling', 'Calendar'], url: 'https://usemotion.com', color: '#7c3aed', emoji: '📅' },
    { id: 25, name: 'Zapier AI', category: 'productivity', price: 'freemium', desc: 'AI-enhanced automation tool connecting 5000+ apps to automate workflows without code.', tags: ['Automation', 'No-code'], url: 'https://zapier.com', color: '#ff4a00', emoji: '⚡' },
    { id: 26, name: 'Reclaim.ai', category: 'productivity', price: 'freemium', desc: 'Smart scheduling app that auto-blocks time for habits, tasks, and focus time in your calendar.', tags: ['Scheduling', 'Focus'], url: 'https://reclaim.ai', color: '#0091ff', emoji: '⏰' },

    // RESEARCH
    { id: 27, name: 'Perplexity AI', category: 'research', price: 'freemium', desc: 'AI-powered search engine that provides direct answers with cited sources instead of just links.', tags: ['Search', 'Citations'], url: 'https://perplexity.ai', color: '#1fb8cd', emoji: '🔍' },
    { id: 28, name: 'Elicit', category: 'research', price: 'freemium', desc: 'AI research assistant that finds and summarizes academic papers to help researchers work faster.', tags: ['Academic', 'Papers'], url: 'https://elicit.com', color: '#7c3aed', emoji: '📚' },
    { id: 29, name: 'Consensus', category: 'research', price: 'freemium', desc: 'Search engine for scientific research that uses AI to find consensus across published papers.', tags: ['Science', 'Evidence'], url: 'https://consensus.app', color: '#0f766e', emoji: '🧬' },
    { id: 30, name: 'Semantic Scholar', category: 'research', price: 'free', desc: 'Free AI-powered academic search engine for finding and understanding scientific literature.', tags: ['Academic', 'Free'], url: 'https://semanticscholar.org', color: '#1a5fb4', emoji: '🎓' },

    // AUDIO
    { id: 31, name: 'ElevenLabs', category: 'audio', price: 'freemium', desc: 'Realistic AI voice generation and cloning tool for audiobooks, podcasts and voiceovers.', tags: ['Voice', 'TTS'], url: 'https://elevenlabs.io', color: '#f5a623', emoji: '🔊' },
    { id: 32, name: 'Murf.ai', category: 'audio', price: 'freemium', desc: 'AI voice generator with 120+ voices in 20+ languages for creating professional voice-overs.', tags: ['Voiceover', 'Multilingual'], url: 'https://murf.ai', color: '#6c47ff', emoji: '🎤' },
    { id: 33, name: 'Suno', category: 'audio', price: 'freemium', desc: 'AI music generation tool that creates full songs with vocals and instruments from text prompts.', tags: ['Music', 'Songs'], url: 'https://suno.ai', color: '#ff3e6c', emoji: '🎵' },
    { id: 34, name: 'Adobe Podcast', category: 'audio', price: 'free', desc: 'AI-powered podcast recording and editing tool that removes background noise and enhances voice quality.', tags: ['Podcast', 'Noise removal'], url: 'https://podcast.adobe.com', color: '#ff0000', emoji: '🎙️' },
];

// Color mapping for logos
const logoColors = {
    writing: ['#10a37f','#cc785c','#15c39a','#6c47ff','#ff6b6b','#000000'],
    coding: ['#24292e','#2563eb','#6c47ff','#f26207','#cc785c','#09b6a2'],
    image: ['#e91e63','#10a37f','#9b59b6','#ff0000','#00c4cc'],
    video: ['#10a37f','#0f0f0f','#5c47ff','#ff6347'],
    productivity: ['#000000','#1a73e8','#7c3aed','#ff4a00','#0091ff'],
    research: ['#1fb8cd','#7c3aed','#0f766e','#1a5fb4'],
    audio: ['#f5a623','#6c47ff','#ff3e6c','#ff0000']
};

let activeCategory = 'all';
let activePrice = 'all';
let searchQuery = '';
let userSubmittedTools = [];

// ===== RENDER =====
function renderTools() {
    const allTools = [...aiTools, ...userSubmittedTools];
    let filtered = allTools.filter(tool => {
        const matchCat = activeCategory === 'all' || tool.category === activeCategory;
        const matchPrice = activePrice === 'all' || tool.price === activePrice;
        const matchSearch = searchQuery === '' ||
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.desc.toLowerCase().includes(searchQuery) ||
            tool.category.toLowerCase().includes(searchQuery) ||
            tool.tags.some(t => t.toLowerCase().includes(searchQuery));
        return matchCat && matchPrice && matchSearch;
    });

    document.getElementById('toolCount').textContent = filtered.length;
    const grid = document.getElementById('toolsGrid');
    const noResults = document.getElementById('noResults');

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    noResults.classList.add('hidden');

    grid.innerHTML = filtered.map(tool => `
        <div class="tool-card" onclick="window.open('${tool.url}','_blank')">
            <div class="tool-header">
                <div class="tool-logo" style="background:${tool.color}20;color:${tool.color};">${tool.emoji}</div>
                <div class="tool-header-info">
                    <div class="tool-name">${tool.name}</div>
                    <div class="tool-category-badge">${categoryLabel(tool.category)}</div>
                </div>
            </div>
            <p class="tool-desc">${tool.desc}</p>
            <div class="tool-footer">
                <div class="tool-tags">
                    ${tool.tags.map(t => `<span class="tool-tag">${t}</span>`).join('')}
                </div>
                <span class="price-badge price-${tool.price}">${priceLabel(tool.price)}</span>
            </div>
            <a class="tool-link" href="${tool.url}" target="_blank" onclick="event.stopPropagation()">
                Visit Tool <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    `).join('');
}

function categoryLabel(c) {
    return { writing: 'Writing', coding: 'Coding', image: 'Image', video: 'Video', productivity: 'Productivity', research: 'Research', audio: 'Audio' }[c] || c;
}
function priceLabel(p) {
    return { free: 'Free', freemium: 'Freemium', paid: 'Paid' }[p] || p;
}

// ===== FILTERS & INIT (wrapped in DOMContentLoaded) =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.filter;
            renderTools();
        });
    });

    document.querySelectorAll('.price-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.price-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activePrice = btn.dataset.price;
            renderTools();
        });
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderTools();
    });

    document.getElementById('submitPopup').addEventListener('click', function(e) {
        if (e.target === this) closeSubmitPopup();
    });

    renderTools();
});
function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchQuery = '';
    renderTools();
}

// ===== SUBMIT POPUP =====
function openSubmitPopup() {
    document.getElementById('submitPopup').classList.remove('hidden');
}
function closeSubmitPopup() {
    document.getElementById('submitPopup').classList.add('hidden');
}

function submitTool() {
    const name = document.getElementById('toolName').value.trim();
    const url = document.getElementById('toolUrl').value.trim();
    const category = document.getElementById('toolCategory').value;
    const desc = document.getElementById('toolDesc').value.trim();
    const price = document.getElementById('toolPrice').value;

    if (!name || !url || !category || !desc || !price) {
        alert('Please fill in all fields.');
        return;
    }

    const newTool = {
        id: Date.now(),
        name, category, price, desc,
        url,
        tags: [categoryLabel(category)],
        color: '#FF9B51',
        emoji: '⭐'
    };
    userSubmittedTools.push(newTool);
    closeSubmitPopup();
    renderTools();

    // Clear form
    ['toolName','toolUrl','toolDesc'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('toolCategory').value = '';
    document.getElementById('toolPrice').value = '';

    alert(`"${name}" has been added to the directory!`);
}
