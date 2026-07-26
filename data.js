// 博客数据
const blogPosts = [
      {
        image: '<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 8V4H8"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M4 12a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1"/><path d="M6 12v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7"/></svg>',
        category: 'AI开发',
        title: '如何用AI Agent提升开发效率',
        content: '在当今快速发展的技术环境中，AI Agent已经成为提升开发效率的重要工具。通过合理设计Prompt和工作流，我们可以让AI协助完成代码生成、问题分析、方案设计等任务。\n\n首先，Prompt设计是关键。好的Prompt应该包含清晰的上下文、明确的任务描述和期望的输出格式。其次，建立标准化的工作流程，让AI能够持续地为项目贡献价值。\n\n在实践中，我发现AI Agent最擅长的是：1）快速生成代码模板；2）分析和解释复杂代码；3）提供多种解决方案供选择；4）自动化重复性任务。'
      },
      {
        image: '<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"/><path d="M12 12h.01"/></svg>',
        category: 'AI应用',
        title: '从一台个人电脑到企业级AI助手：本地大模型部署实践',
        content: '项目背景\n\n随着大模型技术的发展，越来越多企业开始尝试将AI引入日常办公流程。但对于很多企业来说，直接使用云端AI服务存在几个问题：企业内部资料不能随意上传到第三方平台；数据安全和隐私无法完全掌控；长期使用API服务成本较高。\n\n因此，本次项目模拟了一次企业内部AI系统建设需求：为一家企业部署一套私有化AI助手系统，让员工能够登录内部平台，上传文件，并通过AI对企业资料进行查询、分析和辅助办公。\n\n第一阶段：本地大模型环境搭建\n\n选择了Ollama作为本地模型运行框架，原因包括：安装简单、支持Windows环境、可以快速切换不同模型、提供本地API接口。测试了DeepSeek-R1、Qwen3 1.7B/4B/8B等多个模型，最终选择Qwen3作为核心模型。\n\n第二阶段：解决本地模型调用问题\n\n真正的企业应用需要完整的调用链路：用户→企业网站→后端服务器→Ollama API→本地大模型→返回结果。实现了网页中的AI助手直接调用本地部署的大模型，不再依赖云端API。\n\n第三阶段：搭建企业内部管理网站\n\n设计了一套完整的内部系统，包括：登录系统、用户管理、文件中心、AI助手、数据分析模块。实现了员工账号体系，区分管理员和普通员工权限。\n\n第四阶段：文件上传与AI阅读\n\n支持Word文档、PDF文件、Excel表格的上传和AI分析。员工上传销售数据后，AI可以回答"今年第一季度销售额最高的产品是什么？"等问题。\n\n第五阶段：表格分析能力实现\n\n重点测试了AI对表格的理解能力。用户不需要自己制作复杂公式，只需"帮我分析这个月销售下降原因"，AI就能结合上传的数据进行分析。\n\n项目总结\n\n这次项目最大的收获，不只是成功运行了一个本地模型，而是完整经历了一套AI产品落地流程。技术链路包括：本地大模型部署、Ollama环境搭建、Qwen3模型接入、后端API开发、用户系统设计、文件处理、数据分析、Web应用集成。\n\n技术栈：Ollama、Qwen3、Python、Web后端、文件解析系统、数据分析模块、用户权限系统'
      },
      {
        image: '<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="13.5" cy="6.5" r="0.5"/><circle cx="17.5" cy="10.5" r="0.5"/><circle cx="8.5" cy="7.5" r="0.5"/><circle cx="6.5" cy="12.5" r="0.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"/></svg>',
        category: 'UI设计',
        title: 'Apple设计语言在Web中的应用',
        content: 'Apple的设计语言以其简洁、优雅和一致性著称。将这些设计原则应用到Web开发中，可以显著提升用户界面的品质感。\n\n关键设计元素包括：1）毛玻璃效果（backdrop-filter）；2）精致的圆角和阴影；3）流畅的动画过渡；4）统一的间距和排版系统。\n\n在实现过程中，CSS的backdrop-filter属性是实现毛玻璃效果的关键，而CSS变量则帮助我们建立统一的设计系统。动画方面，使用cubic-bezier曲线可以创造出更自然的过渡效果。'
      }
    ];

// 项目数据
const projectDetails = [
      {
        image: '<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>',
        image2: '<img src="https://raw.githubusercontent.com/builan14031981-sketch/builan14031981-sketch.github.io/main/images/noteproject.png" style="width:100%;border-radius:var(--radius-lg);">',
        category: '桌面应用开发',
        title: 'Electron智能便签工具',
        positioning: '一个简单好用的桌面便签工具，承载用户的奇思妙想',
        desc: '一款轻量级Electron桌面便签应用，支持多书签、主题切换、设置面板、模式预设等功能。这是我独立开发的第二个完善的小软件，旨在提供一个简单好用的工具来承载用户的奇思妙想。',
        techStack: ['Electron 28', 'HTML/CSS/JS', 'Node.js', '原生拖拽API'],
        background: '想要一个可以在桌面快速记录想法的工具，市面上的便签软件要么太复杂，要么不够美观，于是决定自己开发一个。',
        problems: [
          '解决Electron窗口置顶问题，实现screen-saver级别置顶',
          '实现Mini Window独立窗口，支持拖动和点击恢复',
          '设计7套主题系统，实现Theme与Appearance分离',
          '实现任务三态系统（待完成/已完成/暂不可做）'
        ],
        tags: ['Electron', '桌面应用', 'AI Agent', 'Node.js'],
        features: [
          '多书签管理 — 创建、重命名、删除书签页',
          '便签CRUD — 新建、编辑、删除想法',
          '拖拽排序 — mousedown阈值版拖拽，支持卡片重排',
          '系统托盘 — 最小化到托盘，单击恢复',
          '系统级顶层置顶 — screen-saver级别，不被全屏程序覆盖',
          'Mini Window — 缩小为小组件（独立BrowserWindow）',
          '7个主题 — 暖沙、雾蓝、森林绿、樱花粉、深夜黑、石墨灰、薄荷绿',
          '任务状态系统 — 待完成/已完成/暂不可做',
          '开机自启动设置'
        ],
        links: [
          { name: 'GitHub', url: 'https://github.com/builan14031981-sketch' }
        ]
      },
      {
        image: '<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 8V4H8"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M4 12a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1"/><path d="M6 12v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7"/></svg>',
        category: 'AI应用开发',
        title: '本地AI助手系统',
        positioning: '企业级私有化AI部署实践，探索AI Agent自动化应用',
        desc: '搭建本地大语言模型运行环境，探索AI Agent自动化应用。通过集成Ollama、DeepSeek、Qwen等模型，实现智能化工作流，让AI真正成为开发者的得力助手。',
        techStack: ['Ollama', 'Qwen3', 'DeepSeek', 'Python', 'Web后端'],
        background: '企业内部资料不能随意上传到第三方平台，需要一套私有化AI助手系统，让员工能够安全地使用AI能力。',
        problems: [
          '解决本地模型性能与响应速度的平衡问题',
          '实现文件上传与AI内容理解的完整链路',
          '设计用户权限系统，区分管理员和普通员工',
          '实现表格数据分析能力'
        ],
        tags: ['Ollama', 'DeepSeek', 'Qwen', 'AI Agent'],
        features: [
          '本地模型部署 — 使用Ollama运行开源大模型',
          '多模型支持 — 集成DeepSeek、Qwen等主流模型',
          'Agent工作流 — 自动化任务处理流程',
          'Prompt优化 — 针对不同场景设计专用Prompt',
          '上下文管理 — 维护对话历史，提升交互体验',
          'API集成 — 支持调用云端API扩展能力'
        ],
        links: []
      },
      {
        image: '<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>',
        image2: '<img src="https://raw.githubusercontent.com/builan14031981-sketch/builan14031981-sketch.github.io/main/images/project-chat-home.png" style="width:100%;border-radius:var(--radius-lg);margin-bottom:16px;"><img src="https://raw.githubusercontent.com/builan14031981-sketch/builan14031981-sketch.github.io/main/images/project-chat-salary.png" style="width:100%;border-radius:var(--radius-lg);margin-bottom:16px;"><img src="https://raw.githubusercontent.com/builan14031981-sketch/builan14031981-sketch.github.io/main/images/project-knowledge.png" style="width:100%;border-radius:var(--radius-lg);">',
        category: 'AI应用开发',
        title: '智能AI助手系统',
        positioning: '可接入企业微信的智能助手，支持知识库读取、联网搜索、任务管理',
        desc: '基于FastAPI开发的智能AI助手，接入小米MiMo大模型，支持知识库文档读取、联网搜索、任务管理等功能。可通过企业微信随时调用，让AI成为真正的办公伙伴。',
        techStack: ['FastAPI', 'Python', '小米MiMo API', 'SQLite', 'Bing搜索', '企业微信'],
        background: '想要一个真正能用的AI助手，可以读取知识库文档，随时通过企业微信调用，而不是一个只能聊天的机器人。',
        problems: [
          '接入小米MiMo大模型，实现智能对话',
          '实现知识库功能，AI可读取文档内容',
          '集成联网搜索（Bing），获取实时信息',
          '设计任务管理系统，老板可分发任务',
          '实现薪资数据安全隔离',
          '支持企业微信接入'
        ],
        tags: ['FastAPI', 'AI Agent', 'MiMo API', '知识库'],
        features: [
          '知识库读取 — 上传文档，AI自动摘要并可查询',
          '联网搜索 — Bing搜索集成，获取实时信息',
          '任务管理 — 创建、分配、跟踪任务',
          '企业微信接入 — 随时随地调用AI助手',
          '数据安全 — 薪资等敏感数据隔离保护',
          '智能对话 — 接入小米MiMo大模型'
        ],
        links: []
      }
    ];