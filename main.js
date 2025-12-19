// Set Year
document.getElementById('year').innerText = new Date().getFullYear();

// FAQ Data
const faqs = [
    {
        question: "هل تقدمون ضماناً على التركيب والأجهزة؟",
        answer: "نعم، نقدم ضماناً شاملاً على جميع الأجهزة التي نقوم بتوريدها حسب ضمان الوكيل، بالإضافة إلى ضمان على جودة التركيب والبرمجة لضمان راحة بالك."
    },
    {
        question: "هل تتوفر عقود صيانة سنوية للشركات؟",
        answer: "بالتأكيد، نوفر عقود صيانة دورية (سنوية أو نصف سنوية) لضمان عمل أنظمتك بكفاءة عالية وتجنب الأعطال المفاجئة."
    },
    {
        question: "ما هي المناطق التي تغطونها؟",
        answer: "مقرنا الرئيسي في الرياض، ونغطي جميع أحياء الرياض والمناطق المحيطة بها. للمشاريع الكبيرة، يمكننا تقديم خدماتنا في مناطق أخرى بالمملكة."
    },
    {
        question: "هل يمكنني مشاهدة كاميرات المراقبة عن طريق الجوال؟",
        answer: "نعم، جميع أنظمة المراقبة الحديثة التي نقوم بتركيبها تدعم المشاهدة عن بعد عبر تطبيقات الجوال (iPhone و Android) ومن أي مكان في العالم."
    },
    {
        question: "كم يستغرق تركيب شبكة أو نظام مراقبة؟",
        answer: "تعتمد المدة على حجم المشروع. المشاريع الصغيرة للمنازل والمكاتب الصغيرة عادة ما تستغرق 1-3 أيام عمل، بينما المشاريع الكبيرة يتم تحديد جدول زمني لها بعد المعاينة."
    }
];


const projectsData = [
    {
        id: 1,
        title: "منصة تعليمية متكاملة",
    description: "تصميم وتطوير منصة تعليمية تفاعلية للتدريب عن بعد، تشمل دورات فيديو واختبارات تفاعلية.",
     image: "assets/projects/1.jpeg",
        category: "التعليم",
        categoryColor: "text-green-800 dark:text-green-300 bg-green-200 dark:bg-green-900/50",
        isFeatured: true,
        durationDays: 120,
        stats: [
            { icon: "users", value: "+5000", label: "مستخدم" },
            { icon: "cloud-check", value: "99.9%", label: "جاهزية" },
            { icon: "graduation-cap", value: "30+", label: "دورة تدريبية" },
        ],
        features: ["تصميم متجاوب", "بوابة دفع آمنة", "لوحة تحكم للمدربين", "دعم فني مستمر"]
    },
    {
        id: 2,
        title: "تطبيق إدارة العقارات",
    description: "تطبيق جوال يسهل إدارة الإيجارات والعقود والصيانة للملاك والمستأجرين.",
        image: "assets/projects/2.jpeg",
        category: "العقارات",
        categoryColor: "text-indigo-800 dark:text-indigo-300 bg-indigo-200 dark:bg-indigo-900/50",
        isFeatured: false,
        features: ["تنبيهات دفع الإيجار", "تتبع طلبات الصيانة", "تقارير مالية", "واجهة سهلة الاستخدام"]
    },
    {
        id: 3,
        title: "موقع حكومي للخدمات الإلكترونية",
    description: "بوابة خدمات رقمية متوافقة مع المعايير الحكومية لتسهيل الإجراءات على المواطنين.",
        image: "assets/projects/3.jpeg",
        category: "حكومي",
        categoryColor: "text-blue-800 dark:text-blue-300 bg-blue-200 dark:bg-blue-900/50",
        isFeatured: false,
        features: ["أمان عالي للبيانات", "سرعة في الأداء", "توافق مع الهواتف الذكية", "دعم فني متكامل"]
    },
   
    {

        id: 4,
        title: "نظام إدارة مخزون متقدم",
    description: "برنامج سحابي لمتابعة المخزون، الطلبات، والموردين للشركات التجارية والصناعية.",
        image: "assets/projects/4.jpeg",
        category: "تجاري",
        categoryColor: "text-purple-800 dark:text-purple-300 bg-purple-200 dark:bg-purple-900/50",
        isFeatured: false,
        features: ["تكامل مع نقاط البيع", "تنبيهات النقص في المخزون", "تقارير مبيعات مفصلة", "إدارة صلاحيات المستخدمين"]
    },
     {
        id: 5,
        title: "نظام إدارة علاقات العملاء (CRM)",
    description: "برنامج سحابي لمتابعة المخزون، الطلبات، والموردين للشركات التجارية والصناعية.",
        image: "assets/projects/5.jpeg",
        category: "تجاري",
        categoryColor: "text-purple-800 dark:text-purple-300 bg-purple-200 dark:bg-purple-900/50",
        isFeatured: false,
        features: ["تكامل مع نقاط البيع", "تنبيهات النقص في المخزون", "تقارير مبيعات مفصلة", "إدارة صلاحيات المستخدمين"]
    },

];

// Initialize Icons
lucide.createIcons();

// Mobile Menu Logic
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

// Contact Form Logic
function submitForm(e) {
    e.preventDefault();
    // Simulate API call
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'جاري الإرسال...';
    btn.disabled = true;

    setTimeout(() => {
        document.getElementById('contact-form').classList.add('hidden');
        document.getElementById('contact-success').classList.remove('hidden');
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1000);
}

function resetForm() {
    document.getElementById('contact-form').reset();
    document.getElementById('contact-form').classList.remove('hidden');
    document.getElementById('contact-success').classList.add('hidden');
}

// FAQ Render & Toggle Logic
function renderFaqs() {
    const container = document.getElementById('faq-container');
    if(!container) return;

    container.innerHTML = faqs.map((faq, index) => `
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <button onclick="toggleFaq(${index})" class="w-full px-6 py-4 text-right flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-800">${faq.question}</span>
                <i data-lucide="chevron-down" class="w-5 h-5 text-gray-400 faq-icon" id="icon-faq-${index}"></i>
            </button>
            <div id="faq-${index}" class="hidden px-6 py-4 bg-white text-gray-600 border-t border-gray-100 transition-all duration-300">
                ${faq.answer}
            </div>
        </div>
    `).join('');
    
    lucide.createIcons(); // Re-init icons for new content
}

function toggleFaq(index) {
    const content = document.getElementById(`faq-${index}`);
    const icon = document.getElementById(`icon-faq-${index}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('animate-fade-in-down'); 

        icon.setAttribute('data-lucide', 'chevron-up');
        icon.classList.remove('text-gray-400');
        icon.classList.add('text-secondary');
    } else {
        content.classList.add('hidden');
        content.classList.remove('animate-fade-in-down');

        icon.setAttribute('data-lucide', 'chevron-down');
        icon.classList.add('text-gray-400');
        icon.classList.remove('text-secondary');
    }
    lucide.createIcons();
}

// Services Rendering
function createServiceCardHTML(service) { // Updated to match new CSS
    const typesHtml = service.types.map(type => `
        <li class="service-type-item">
            <i class="fas fa-check-circle text-accent"></i>
            <span>${type}</span>
        </li>
    `).join('');

    return `
        <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 scroll-snap-align-start">
            <div class="service-card hidden-card h-full" data-service-id="${service.id}">
                <div class="service-card-inner">
                    <div class="service-icon-container">
                        <div class="service-icon-wrapper">
                            <img
                                src="${service.image}"
                                alt="${service.title}"
                                class="service-icon-image"
                                loading="lazy"
                            >
                            <div class="service-glow-animation"></div>
                        </div>
                    </div>
                    <div class="service-content flex-grow flex flex-col">
                        <h3 class="service-title">${service.title}</h3>
                        <p class="service-description">${service.description}</p>
                        <div class="service-actions">
                            <button
                                class="btn service-details-btn"
                                onclick="openServiceModal(${service.id})"
                            >
                                <i class="fas fa-info-circle me-2"></i>
                                المزيد من التفاصيل
                            </button>
                            <button onclick="handleContactClick()" class="btn service-contact-btn">
                                <i class="fas fa-phone me-2"></i>
                                تواصل معنا
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createServiceModalContentHTML(service) {
    const featuresHTML = service.features.map(f => `
        <li class="flex items-start gap-2">
             <i data-lucide="check-circle" class="w-5 h-5 text-secondary mt-1 flex-shrink-0"></i>
             <span class="text-gray-600">${f}</span>
        </li>
    `).join('');

    const tasksHTML = service.tasks ? service.tasks.map(t => `
        <li class="flex items-start gap-2">
             <i data-lucide="wrench" class="w-5 h-5 text-secondary mt-1 flex-shrink-0"></i>
             <span class="text-gray-600">${t}</span>
        </li>
    `).join('') : '';

    const benefitsHTML = service.benefits ? service.benefits.map(b => `
        <li class="flex items-start gap-2">
             <i data-lucide="star" class="w-5 h-5 text-secondary mt-1 flex-shrink-0"></i>
             <span class="text-gray-600">${b}</span>
        </li>
    `).join('') : '';

    return `
        <div class="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
            <div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900">${service.title}</h3>
                 <span class="text-sm font-semibold text-secondary mt-1 block">${service.category}</span>
            </div>
            <button onclick="closeServiceModal()" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <i data-lucide="x" class="w-6 h-6 text-gray-500"></i>
            </button>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <img src="${service.image}" alt="${service.title}" class="rounded-xl w-full h-64 object-cover mb-4 shadow-md" />
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                     <p class="text-gray-700 leading-relaxed">${service.description}</p>
                </div>
            </div>
            <div class="flex flex-col h-full">
                <div class="flex-grow">
                    <h4 class="font-bold text-lg mb-4 text-gray-900">أهم المزايا</h4>
                    <ul class="space-y-3 mb-6">
                        ${featuresHTML}
                    </ul>
                    ${tasksHTML ? `<h4 class="font-bold text-lg mb-4 text-gray-900">المهام المنجزة</h4>
                    <ul class="space-y-3 mb-6">
                        ${tasksHTML}
                    </ul>` : ''}
                    ${benefitsHTML ? `<h4 class="font-bold text-lg mb-4 text-gray-900">الفوائد</h4>
                    <ul class="space-y-3">
                        ${benefitsHTML}
                    </ul>` : ''}
                </div>
                 <div class="mt-8 text-left border-t border-gray-100 pt-6">
                    <a href="#contact" onclick="closeServiceModal()" class="inline-flex items-center justify-center bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-sky-600 transition-colors shadow-md gap-2 w-full sm:w-auto">
                        <i data-lucide="message-square" class="w-5 h-5"></i>
                        اطلب هذه الخدمة
                    </a>
                </div>
            </div>
        </div>
    `;
}

// ================= NEW PORTFOLIO LOGIC =================

// Render Featured Project Card
function createFeaturedProjectCardHTML(project) {
    const statsHTML = project.stats ? project.stats.map(stat => `
        <div class="flex items-center gap-3">
            <div class="flex items-center justify-center rounded-full bg-blue-50 dark:bg-slate-700 text-secondary w-10 h-10">
                <i data-lucide="${stat.icon}" class="w-6 h-6"></i>
            </div>
            <div>
                <p class="font-bold text-lg text-textPrimary dark:text-darkTextPrimary">${stat.value}</p>
                <p class="text-sm text-muted dark:text-darkMuted">${stat.label}</p>
            </div>
        </div>
    `).join('') : '';

    return `
        <div class="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-6 sm:gap-8 p-6 bg-card rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div class="w-full md:w-1/2 rounded-lg overflow-hidden relative group">
                <div class="relative w-full aspect-video overflow-hidden rounded-lg">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div class="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">مشروع مميز</div>
                </div>
            </div>
            <div class="w-full md:w-1/2 flex flex-col justify-center"> 
                <div class="flex flex-col gap-4">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider ${project.categoryColor} px-3 py-1 rounded-full">
                            ${project.category}
                        </span>
                        <h3 class="text-2xl sm:text-3xl font-bold mt-3 text-textPrimary dark:text-darkTextPrimary">${project.title}</h3>
                        <p class="text-muted dark:text-darkMuted mt-2 text-base leading-relaxed">${project.description}</p>
                    </div>
                    ${statsHTML ? `<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">${statsHTML}</div>` : ''}
                </div>
                 <div class="mt-8">
                    <button onclick="openProjectPreview(${project.id})" class="bg-primary hover:bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
                        <i data-lucide="eye" class="w-4 h-4"></i>
                        معاينة المشروع
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render Standard Project Card
function createProjectCardHTML(project) {
    const featuresHTML = project.features.slice(0, 2).map(feature => `
        <li class="flex items-center gap-2">
            <i data-lucide="check" class="w-4 h-4 text-secondary"></i>
            <span class="text-sm text-gray-500 dark:text-gray-400">${feature}</span>
        </li>
    `).join('');

    return `
        <div class="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 cursor-pointer group" onclick="openProjectPreview(${project.id})">
            <div class="w-full rounded-lg overflow-hidden">
                <div class="relative w-full aspect-video overflow-hidden rounded-lg">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-colors"></div>
                </div>
            </div>
            <div>
                <span class="text-xs font-bold uppercase tracking-wider ${project.categoryColor} px-3 py-1 rounded-full">
                    ${project.category}
                </span>
                <h3 class="text-xl font-bold mt-3 text-gray-900 group-hover:text-primary transition-colors">${project.title}</h3>
                <p class="text-gray-500 mt-1 text-sm line-clamp-2">${project.description}</p>
            </div>
            <ul class="flex flex-col gap-2 pt-4 border-t border-gray-100 mt-auto">
                ${featuresHTML}
                <li class="text-xs text-secondary font-semibold mt-1">المزيد من التفاصيل...</li>
            </ul>
        </div>
    `;
}

// Generate Modal Content
function createModalContentHTML(project) {
     const statsHTML = project.stats ? project.stats.map(stat => `
        <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-700 text-secondary">
                <i data-lucide="${stat.icon}" class="w-5 h-5"></i> 
            </div>
            <div>
                <p class="font-bold text-lg text-gray-900">${stat.value}</p>
                <p class="text-sm text-gray-500">${stat.label}</p>
            </div>
        </div>
    `).join('') : '';

     const featuresHTML = project.features.map(f => `
        <li class="flex items-start gap-2">
             <i data-lucide="check-circle" class="w-5 h-5 text-secondary mt-1 flex-shrink-0"></i> 
             <span class="text-gray-600">${f}</span>
        </li>
    `).join('');

    return `
        <div class="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
            <div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900">${project.title}</h3>
                 <span class="text-sm font-semibold text-secondary mt-1 block">${project.category}</span>
            </div>
            <button onclick="closeProjectPreview()" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <i data-lucide="x" class="w-6 h-6 text-gray-500"></i>
            </button>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <img src="${project.image}" alt="${project.title}" class="rounded-xl w-full h-64 object-cover mb-4 shadow-md" />
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                     <p class="text-gray-700 leading-relaxed">${project.description}</p>
                     ${project.durationDays ? `<p class="mt-4 font-semibold text-gray-900 flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-secondary"></i> مدة التنفيذ: <span class="text-primary">${project.durationDays} يوم</span></p>` : ''}
                </div>
            </div>
            <div class="flex flex-col h-full">
                ${project.stats ? `<div class="mb-6">
                    <h4 class="font-bold text-lg mb-4 text-gray-900">إحصائيات المشروع</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${statsHTML}
                    </div>
                </div>` : ''}
                <div class="flex-grow">
                    <h4 class="font-bold text-lg mb-4 text-gray-900">المميزات والتفاصيل</h4>
                    <ul class="space-y-3">
                        ${featuresHTML}
                    </ul>
                </div>
                 <div class="mt-8 text-left border-t border-gray-100 pt-6">
                    <a href="#contact" onclick="closeProjectPreview()" class="inline-flex items-center justify-center bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-sky-600 transition-colors shadow-md gap-2 w-full sm:w-auto">
                        <i data-lucide="message-square" class="w-5 h-5"></i>
                        اطلب مشروعاً مماثلاً
                    </a>
                </div>
            </div>
        </div>
    `;
}

const projectsGrid = document.getElementById('projects-grid');
const projectModal = document.getElementById('projectModal');
const modalContentWrapper = document.getElementById('modal-content-wrapper');

function openProjectPreview(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    modalContentWrapper.innerHTML = createModalContentHTML(project);
    projectModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
    lucide.createIcons(); // Re-init icons for modal content
}

function closeProjectPreview() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == projectModal) {
        closeProjectPreview();
    }
}

function renderProjects() {
    if (!projectsGrid) return;
    
    const featuredProject = projectsData.find(p => p.isFeatured);
    const otherProjects = projectsData.filter(p => !p.isFeatured);

    let html = '';

    if (featuredProject) {
        html += createFeaturedProjectCardHTML(featuredProject);
    }

    otherProjects.forEach(project => {
        html += createProjectCardHTML(project);
    });

    projectsGrid.innerHTML = html;
    lucide.createIcons();
}

// Handle Contact Button Click from Service Modal
function handleContactClick(modalId = null) {
    const contactSection = document.getElementById('contact');

    if (modalId) {
        const modalElement = document.getElementById(modalId);
        if (modalElement && !modalElement.classList.contains('hidden')) {
            closeServiceModal();
        }
    }
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Scroll Spy Logic
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjustment for sticky header
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('hidden-card');
                    entry.target.classList.add('visible-card');
                }, index * 100); // Stagger the animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));
}

// Initialize App
renderFaqs();
renderProjects();
initScrollSpy();
initIntersectionObserver(); // Initial call

