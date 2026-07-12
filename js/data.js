const papers = [
  {
    "id": "512-edge-ai",
    "articleNo": "512",
    "articleDate": "2026-05-12",
    "order": 1,
    "title": "大模型为什么要走向边缘？一文看懂边缘智能、联邦学习与端侧微调",
    "type": "入门文章",
    "level": "基础",
    "venue": "方法背景",
    "venueGroup": "方法背景",
    "paperYear": "",
    "paperName": "系列开篇：边缘智能、联邦学习与端侧微调",
    "authors": "",
    "cover": "",
    "topics": [
      "intro",
      "resource"
    ],
    "topicLabels": [
      "入门",
      "Edge AI"
    ],
    "routes": [
      "starter"
    ],
    "keywords": [
      "边缘智能",
      "联邦学习",
      "端侧微调",
      "隐私",
      "通信开销"
    ],
    "summary": "从边缘计算的基本概念讲起，解释云端大模型为什么不能覆盖所有端侧场景，以及联邦学习和端侧微调为什么会成为自然方向。",
    "problem": "端侧设备的数据敏感、网络不稳定、时延要求高，单纯依赖云端大模型会遇到隐私、延迟和个性化问题。",
    "method": "用边缘智能和联邦学习的基本框架梳理研究问题，再引出端侧微调、资源约束和后续论文阅读主线。",
    "takeaway": "这是整个系列的入口，适合先建立问题背景，再进入 LoRA、Lyapunov 和 Split Federated Learning。",
    "citation": "方法背景文章：大模型为什么要走向边缘？一文看懂边缘智能、联邦学习与端侧微调。",
    "links": []
  },
  {
    "id": "513-lora-edge",
    "articleNo": "513",
    "articleDate": "2026-05-13",
    "order": 2,
    "title": "大模型到了端侧，为什么不能直接微调？从 LoRA 到联邦微调讲清楚",
    "type": "入门文章",
    "level": "基础",
    "venue": "arXiv",
    "venueGroup": "arXiv",
    "paperYear": "2021",
    "paperName": "LoRA: Low-Rank Adaptation of Large Language Models",
    "authors": "Edward J. Hu et al.",
    "cover": "assets/cover-lora-edge.png",
    "topics": [
      "intro",
      "lora",
      "fine-tuning"
    ],
    "topicLabels": [
      "入门",
      "LoRA"
    ],
    "routes": [
      "starter",
      "lora"
    ],
    "keywords": [
      "LoRA",
      "PEFT",
      "全量微调",
      "端侧训练",
      "联邦微调"
    ],
    "summary": "解释为什么端侧不能直接全量微调大模型，并用 LoRA 作为切入点介绍参数高效微调如何降低计算、内存和通信压力。",
    "problem": "全量微调需要保存大量梯度和优化器状态，对手机、边缘设备和无线网络都不友好。",
    "method": "冻结大模型主体，只训练低秩增量矩阵，再讨论它放进联邦学习后的通信和异构问题。",
    "takeaway": "LoRA 不是终点，而是端侧联邦大模型微调的一块基础积木。",
    "citation": "Hu, E. J., et al. LoRA: Low-Rank Adaptation of Large Language Models. arXiv:2106.09685, 2021.",
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2106.09685"
      }
    ]
  },
  {
    "id": "514-lyapunov-intro",
    "articleNo": "514",
    "articleDate": "2026-05-14",
    "order": 3,
    "title": "为什么边缘联邦大模型论文都爱用 Lyapunov 优化？",
    "type": "方法背景",
    "level": "基础",
    "venue": "方法背景",
    "venueGroup": "方法背景",
    "paperYear": "",
    "paperName": "Lyapunov Optimization 在边缘联邦学习中的直觉",
    "authors": "",
    "cover": "assets/cover-lyapunov-edge-fl.png",
    "topics": [
      "intro",
      "lyapunov",
      "resource"
    ],
    "topicLabels": [
      "Lyapunov",
      "在线优化"
    ],
    "routes": [
      "starter",
      "lyapunov"
    ],
    "keywords": [
      "Lyapunov",
      "虚拟队列",
      "长期约束",
      "在线调度",
      "资源优化"
    ],
    "summary": "从无线链路、设备状态和长期平均约束出发，解释 Lyapunov 为什么适合组织边缘联邦学习里的在线资源调度问题。",
    "problem": "边缘系统不是静态优化问题，设备状态、信道、数据价值和能耗预算都会随时间变化。",
    "method": "用虚拟队列表达长期约束，再把长期随机优化转成每一轮可求解的 drift-plus-penalty 子问题。",
    "takeaway": "读后续论文时，可以先找约束、队列、每轮决策变量和子问题求解方法。",
    "citation": "方法背景文章：为什么边缘联邦大模型论文都爱用 Lyapunov 优化？",
    "links": []
  },
  {
    "id": "515-fedft-bandwidth",
    "articleNo": "515",
    "articleDate": "2026-05-15",
    "order": 4,
    "title": "一篇论文看懂 Lyapunov 如何做设备调度和带宽分配",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TWC",
    "venueGroup": "IEEE TWC",
    "paperYear": "2025",
    "paperName": "Federated Fine-Tuning for Pre-Trained Foundation Models Over Wireless Networks",
    "authors": "Zixin Wang, Yong Zhou, Yuanming Shi, Khaled B. Letaief",
    "cover": "assets/cover-lyapunov-scheduling-bandwidth.png",
    "topics": [
      "lyapunov",
      "lora",
      "resource",
      "fine-tuning"
    ],
    "topicLabels": [
      "Lyapunov",
      "LoRA"
    ],
    "routes": [
      "lyapunov",
      "lora"
    ],
    "keywords": [
      "设备调度",
      "带宽分配",
      "Foundation Model",
      "无线网络",
      "长期时延"
    ],
    "summary": "用一篇具体的无线联邦微调论文说明：每一轮选哪些设备、分多少带宽，如何和长期平均时延约束一起建模。",
    "problem": "想多选设备提升训练收益，但被选设备越多，上传更新越容易被慢设备拖住。",
    "method": "用 Lyapunov 把长期时延约束转成在线调度，再联合选择设备集合和带宽分配。",
    "takeaway": "边缘联邦大模型论文往往不是只优化模型精度，而是把训练收益和系统时延一起写进问题。",
    "citation": "Wang, Z., Zhou, Y., Shi, Y., and Letaief, K. B. Federated Fine-Tuning for Pre-Trained Foundation Models Over Wireless Networks. IEEE Transactions on Wireless Communications, 24(4):3450-3464, 2025.",
    "links": [
      {
        "label": "DOI",
        "url": "https://doi.org/10.1109/TWC.2025.3531128"
      }
    ]
  },
  {
    "id": "516-zo-fedft",
    "articleNo": "516A",
    "articleDate": "2026-05-16",
    "order": 5,
    "title": "Zeroth-Order FedFT：没有反向传播，大模型还能联邦微调吗？",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TWC",
    "venueGroup": "IEEE TWC",
    "paperYear": "2026",
    "paperName": "Zeroth-Order Federated Fine-Tuning for Large AI Models in Resource-Constrained Wireless Networks",
    "authors": "Tianle Wang, Yong Zhou, Yuanming Shi, Nan Cheng, Haibo Zhou, H. Vincent Poor",
    "cover": "assets/cover-zo-fedft.png",
    "topics": [
      "lyapunov",
      "lora",
      "resource",
      "fine-tuning"
    ],
    "topicLabels": [
      "ZO",
      "Lyapunov"
    ],
    "routes": [
      "lyapunov",
      "lora"
    ],
    "keywords": [
      "零阶优化",
      "FedFT",
      "反向传播",
      "波束成形",
      "功率控制"
    ],
    "summary": "把零阶优化放进端侧大模型联邦微调场景中，讨论训练算法、无线资源和长期时延约束如何耦合。",
    "problem": "反向传播对端侧设备太重，但只省掉反传还不够，通信和无线资源约束仍然存在。",
    "method": "用零阶优化减少训练内存压力，再结合设备选择、接收波束成形、功率控制和 Lyapunov 在线决策。",
    "takeaway": "算法层面的轻量化必须和系统层面的资源调度一起看。",
    "citation": "Wang, T., Zhou, Y., Shi, Y., Cheng, N., Zhou, H., and Poor, H. V. Zeroth-Order Federated Fine-Tuning for Large AI Models in Resource-Constrained Wireless Networks. IEEE Transactions on Wireless Communications, 2026.",
    "links": [
      {
        "label": "DOI",
        "url": "https://doi.org/10.1109/TWC.2026.3661365"
      }
    ]
  },
  {
    "id": "516-latency-energy",
    "articleNo": "516B",
    "articleDate": "2026-05-16",
    "order": 6,
    "title": "边缘训练不能只看快：时延和能耗怎么一起控？",
    "type": "方法背景",
    "level": "进阶",
    "venue": "方法背景",
    "venueGroup": "方法背景",
    "paperYear": "",
    "paperName": "长期时延与能耗约束下的边缘训练调度",
    "authors": "",
    "cover": "assets/cover-latency-energy.png",
    "topics": [
      "lyapunov",
      "resource"
    ],
    "topicLabels": [
      "能耗",
      "资源调度"
    ],
    "routes": [
      "lyapunov"
    ],
    "keywords": [
      "时延",
      "能耗",
      "虚拟队列",
      "带宽",
      "功率",
      "CPU 频率"
    ],
    "summary": "把时延队列和能耗队列放在一起看，说明为什么边缘训练不能只追求单轮速度，也要控制长期能耗预算。",
    "problem": "功率拉满可以让当前轮更快，但会消耗设备能量，长期看可能破坏能耗约束。",
    "method": "用多个虚拟队列描述多个长期约束，再分析设备调度、带宽、功率和计算频率之间的耦合。",
    "takeaway": "做边缘智能系统论文时，单一资源约束往往不够，时延和能耗需要联合建模。",
    "citation": "方法背景文章：边缘训练不能只看快：时延和能耗怎么一起控？",
    "links": []
  },
  {
    "id": "517-streaming-energy",
    "articleNo": "517",
    "articleDate": "2026-05-17",
    "order": 7,
    "title": "边缘联邦学习为什么要看长期能耗？一篇读懂 Streaming Data 下的 Lyapunov 调度",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TCOM",
    "venueGroup": "IEEE TCOM",
    "paperYear": "2025",
    "paperName": "Energy-Efficient Federated Edge Learning With Streaming Data: A Lyapunov Optimization Approach",
    "authors": "Chung-Hsuan Hu, Zheng Chen, Erik G. Larsson",
    "cover": "assets/cover-streaming-energy.png",
    "topics": [
      "lyapunov",
      "resource"
    ],
    "topicLabels": [
      "Streaming Data",
      "能耗"
    ],
    "routes": [
      "lyapunov"
    ],
    "keywords": [
      "Streaming Data",
      "长期能耗",
      "数据重要性",
      "CPU 频率",
      "功率分配"
    ],
    "summary": "Streaming data 场景下，设备不断产生新数据，信道和能耗状态也在变化。论文把学习收益、训练时延和长期能耗放到同一套在线调度框架里。",
    "problem": "最快的设备不一定最值得选，数据最有价值的设备也可能上传太慢或能耗太高。",
    "method": "用数据重要性、训练时延、计算能耗和传输能耗共同构造每轮调度问题，并通过 Lyapunov 处理长期约束。",
    "takeaway": "边缘联邦学习调度不能只看信道，也要看数据价值和设备长期能耗状态。",
    "citation": "Hu, C.-H., Chen, Z., and Larsson, E. G. Energy-Efficient Federated Edge Learning With Streaming Data: A Lyapunov Optimization Approach. IEEE Transactions on Communications, 73(2):1142-1156, 2025.",
    "links": [
      {
        "label": "DOI",
        "url": "https://doi.org/10.1109/TCOMM.2024.3443731"
      }
    ]
  },
  {
    "id": "518-semi-async-sfl",
    "articleNo": "518",
    "articleDate": "2026-05-18",
    "order": 8,
    "title": "模型太大、设备太弱怎么办？一篇看懂半异步联邦分割学习里的 Lyapunov 优化",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TWC",
    "venueGroup": "IEEE TWC",
    "paperYear": "2025",
    "paperName": "Semi-Asynchronous Federated Split Learning for Computing-Limited Devices in Wireless Networks",
    "authors": "H. Ao, H. Tian, W. Ni, G. Nie, D. Niyato",
    "cover": "assets/cover-semi-async-sfl.png",
    "topics": [
      "lyapunov",
      "sfl",
      "resource"
    ],
    "topicLabels": [
      "SFL",
      "Lyapunov"
    ],
    "routes": [
      "lyapunov",
      "sfl"
    ],
    "keywords": [
      "Federated Split Learning",
      "半异步",
      "模型切分",
      "计算受限设备",
      "在线调度"
    ],
    "summary": "当模型本身大到端侧设备跑不动，联邦学习就需要和模型切分结合。文章重点看半异步协同训练如何继续处理长期能耗和在线调度。",
    "problem": "端侧设备计算能力差异大，完全同步会被慢设备拖住，完全异步又会影响训练稳定性。",
    "method": "把半异步协同训练、模型切分、设备选择和资源分配放到 Lyapunov-based alternating optimization 框架里。",
    "takeaway": "SFL 解决模型太大的问题，但没有消除资源调度问题，反而引入了新的切分和协同训练变量。",
    "citation": "Ao, H., Tian, H., Ni, W., Nie, G., and Niyato, D. Semi-Asynchronous Federated Split Learning for Computing-Limited Devices in Wireless Networks. IEEE Transactions on Wireless Communications, 24(6):5196-5212, 2025.",
    "links": [
      {
        "label": "DOI",
        "url": "https://doi.org/10.1109/TWC.2025.3546448"
      }
    ]
  },
  {
    "id": "519-fedlease",
    "articleNo": "519",
    "articleDate": "2026-05-19",
    "order": 9,
    "title": "一个 LoRA 不够用：FedLEASE 如何让联邦大模型学会选择专家？",
    "type": "论文精读",
    "level": "进阶",
    "venue": "NeurIPS",
    "venueGroup": "NeurIPS",
    "paperYear": "2025",
    "paperName": "Adaptive LoRA Experts Allocation and Selection for Federated Fine-Tuning",
    "authors": "Lei Wang, Jieming Bian, Letian Zhang, Jie Xu",
    "cover": "assets/cover-fedlease.png",
    "topics": [
      "lora",
      "fine-tuning"
    ],
    "topicLabels": [
      "LoRA Experts",
      "个性化"
    ],
    "routes": [
      "lora"
    ],
    "keywords": [
      "FedLEASE",
      "LoRA Experts",
      "Mixture-of-Experts",
      "任务异构",
      "个性化联邦微调"
    ],
    "summary": "FedLEASE 的关键问题不是继续压缩参数，而是在客户端任务异构时，让不同客户端拥有更合适的 LoRA expert 组合。",
    "problem": "一个共享 LoRA 可能无法同时适配不同任务、领域、语言风格和用户偏好。",
    "method": "先基于客户端相似性分配 LoRA experts，再让每个客户端自适应选择需要的专家组合。",
    "takeaway": "联邦大模型微调不仅要参数高效，也要异构适配。",
    "citation": "Wang, L., Bian, J., Zhang, L., and Xu, J. Adaptive LoRA Experts Allocation and Selection for Federated Fine-Tuning. Advances in Neural Information Processing Systems 38, 2025.",
    "links": [
      {
        "label": "Paper Page",
        "url": "https://papers.neurips.cc/paper_files/paper/2025/hash/6df1b2b45e64d402588746f79b68b82c-Abstract-Conference.html"
      }
    ]
  },
  {
    "id": "520-sfl-ga",
    "articleNo": "520",
    "articleDate": "2026-05-20",
    "order": 10,
    "title": "Split Federated Learning 如何用 DDQN + 凸优化联合分配算力与带宽",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE TWC",
    "venueGroup": "IEEE TWC",
    "paperYear": "2026",
    "paperName": "Communication-and-Computation Efficient Split Federated Learning in Wireless Networks: Gradient Aggregation and Resource Management",
    "authors": "Yipeng Liang, Qimei Chen, Rongpeng Li, Guangxu Zhu, Muhammad Kaleem Awan, Hao Jiang",
    "cover": "assets/cover-sfl-ga.png",
    "topics": [
      "sfl",
      "resource"
    ],
    "topicLabels": [
      "SFL",
      "DDQN"
    ],
    "routes": [
      "sfl"
    ],
    "keywords": [
      "SFL-GA",
      "DDQN",
      "凸优化",
      "梯度聚合",
      "切分点",
      "CCC"
    ],
    "summary": "文章重点看 SFL-GA 如何减少 smashed data 频繁传输带来的通信开销，并把切分点、带宽和算力放在同一个优化框架里。",
    "problem": "传统 SFL 需要频繁上传 smashed data 和下载梯度，在无线网络里通信开销很重。",
    "method": "在服务器端做 smashed data 梯度聚合，并用 DDQN 处理离散切分点选择、用凸优化处理连续资源分配。",
    "takeaway": "这是一类可复用的混合优化思路：离散决策交给强化学习，连续资源分配交给凸优化。",
    "citation": "Liang, Y., Chen, Q., Li, R., Zhu, G., Awan, M. K., and Jiang, H. Communication-and-Computation Efficient Split Federated Learning in Wireless Networks: Gradient Aggregation and Resource Management. IEEE Transactions on Wireless Communications, 25:1981-1995, 2026.",
    "links": [
      {
        "label": "DOI",
        "url": "https://doi.org/10.1109/TWC.2025.3594006"
      }
    ]
  },
  {
    "id": "521-fedlodrop",
    "articleNo": "521",
    "articleDate": "2026-05-21",
    "order": 11,
    "title": "LoRA 微调也会过拟合？FedLoDrop 如何用 Dropout 同时提升泛化和压缩通信",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE JSAC",
    "venueGroup": "IEEE JSAC",
    "paperYear": "2026",
    "paperName": "FedLoDrop: Federated LoRA With Dropout for Generalized LLM Fine-Tuning",
    "authors": "Sijing Xie, Dingzhu Wen, Changsheng You, Qimei Chen, Mehdi Bennis, Kaibin Huang",
    "cover": "assets/cover-fedlodrop.png",
    "topics": [
      "lora",
      "fine-tuning",
      "resource",
      "generalization"
    ],
    "topicLabels": [
      "LoRA Dropout",
      "泛化"
    ],
    "routes": [
      "lora",
      "resource"
    ],
    "keywords": [
      "FedLoDrop",
      "LoRA Dropout",
      "泛化误差",
      "通信压缩",
      "P-SCA",
      "联邦微调"
    ],
    "summary": "FedLoDrop 把 Dropout 从训练技巧变成系统优化变量：它同时影响泛化误差、通信量、计算开销和收敛速度，并可根据网络资源动态调整。",
    "problem": "联邦 LoRA 微调虽然参数少，但每个客户端本地数据有限，仍然容易过拟合；同时端侧通信、能耗和时延也会限制可训练参数量。",
    "method": "对 LoRA 矩阵的行与列做随机 Dropout，用稳定性理论分析泛化误差界，再联合优化 Dropout rate、子载波分配和通信计算资源。",
    "takeaway": "Dropout rate 不只是手调超参数，而是边缘联邦微调里连接泛化、通信和资源约束的一枚关键旋钮。",
    "citation": "Xie, S., Wen, D., You, C., Chen, Q., Bennis, M., and Huang, K. FedLoDrop: Federated LoRA With Dropout for Generalized LLM Fine-Tuning. IEEE Journal on Selected Areas in Communications, 44, 2026.",
    "links": []
  },
  {
    "id": "522-roba-rank-bandwidth",
    "articleNo": "522",
    "articleDate": "2026-05-22",
    "order": 12,
    "title": "LoRA Rank 该不该一刀切？异构联邦微调的联合 Rank 与带宽优化",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TVT",
    "venueGroup": "IEEE TVT",
    "paperYear": "2026",
    "paperName": "Joint Rank Optimization and Bandwidth Allocation for Heterogeneous Federated LoRA Fine-Tuning",
    "authors": "Yinan Zou, Zixin Wang, Yuanming Shi, Yong Zhou",
    "cover": "assets/cover-roba-rank-bandwidth.png",
    "topics": [
      "lora",
      "fine-tuning",
      "resource",
      "rank"
    ],
    "topicLabels": [
      "Rank 优化",
      "带宽分配"
    ],
    "routes": [
      "lora",
      "resource"
    ],
    "keywords": [
      "ROBA",
      "异构 rank",
      "带宽分配",
      "sum-rank 约束",
      "交替优化",
      "联邦 LoRA"
    ],
    "summary": "这篇短文把 LoRA rank 从固定超参数改写成动态资源，让不同能力和不同信道状态的设备每轮使用不同 rank，并与带宽分配一起优化。",
    "problem": "边缘设备算力和无线信道高度异构，统一 LoRA rank 往往让弱设备掉队、强设备浪费，也无法利用瞬时信道差异。",
    "method": "用 sum-rank 约束保证总体表达能力，再通过交替优化分别求解 rank 分配和带宽分配，最小化最慢设备决定的每轮训练时间。",
    "takeaway": "异构 LoRA 不只要改聚合，也要把 rank、带宽和 straggler effect 放在同一个资源分配问题里看。",
    "citation": "Zou, Y., Wang, Z., Shi, Y., and Zhou, Y. Joint Rank Optimization and Bandwidth Allocation for Heterogeneous Federated LoRA Fine-Tuning. IEEE Transactions on Vehicular Technology, 75(4):7025-7029, 2026.",
    "links": []
  },
  {
    "id": "523-jcsrc",
    "articleNo": "523",
    "articleDate": "2026-05-23",
    "order": 13,
    "title": "多任务联邦学习：客户选择和资源配置，分开优化为什么不够？",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE TC",
    "venueGroup": "IEEE TC",
    "paperYear": "2025",
    "paperName": "JCSRC: Joint Client Selection and Resource Configuration for Energy-Efficient Multi-Task Federated Learning",
    "authors": "Junpeng Ke, Junlong Zhou, Dan Meng, Yue Zeng, Yizhou Shi, Xiangmou Qu, Song Guo",
    "cover": "assets/cover-jcsrc.png",
    "topics": [
      "resource",
      "multi-task",
      "reinforcement"
    ],
    "topicLabels": [
      "多任务 FL",
      "MARL + PSO"
    ],
    "routes": [
      "resource"
    ],
    "keywords": [
      "JCSRC",
      "多任务联邦学习",
      "客户选择",
      "资源配置",
      "MADDPG",
      "PSO",
      "Jetson 测试床"
    ],
    "summary": "JCSRC 面向多任务联邦学习，把客户选择和频率、带宽配置放进同一个框架：上层用 MADDPG 选设备，下层用 PSO 配资源。",
    "problem": "多任务场景下，一台设备可能同时服务多个模型，客户选择会改变资源负载，资源配置又会反过来影响能耗、时延和后续选择。",
    "method": "将黑箱的客户选择交给多智能体强化学习，将有明确能耗模型的资源配置交给带理论约束的 PSO，并在 Jetson 测试床上验证。",
    "takeaway": "对多任务 FL 来说，关键不只是选更好的设备，而是把选谁和怎么分资源一起优化。",
    "citation": "Ke, J., Zhou, J., Meng, D., Zeng, Y., Shi, Y., Qu, X., and Guo, S. JCSRC: Joint Client Selection and Resource Configuration for Energy-Efficient Multi-Task Federated Learning. IEEE Transactions on Computers, 74(12):4094-4108, 2025.",
    "links": []
  },
  {
    "id": "524-fah-qlora",
    "articleNo": "524",
    "articleDate": "2026-05-24",
    "order": 14,
    "title": "量化底座 + 自适应 Rank：联邦 LoRA 微调的「时间-内存」双降方案",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE INFOCOM",
    "venueGroup": "IEEE INFOCOM",
    "paperYear": "2025",
    "paperName": "Federated Adaptive Fine-Tuning of Large Language Models with Heterogeneous Quantization and LoRA",
    "authors": "Zhidong Gao, Zhenxiao Zhang, Yuanxiong Guo, Yanmin Gong",
    "cover": "assets/cover-fah-qlora.png",
    "topics": [
      "lora",
      "fine-tuning",
      "resource",
      "rank",
      "quantization"
    ],
    "topicLabels": [
      "量化底座",
      "自适应 Rank"
    ],
    "routes": [
      "lora",
      "resource"
    ],
    "keywords": [
      "FAH-QLoRA",
      "底座量化",
      "异构 rank",
      "两阶段优化",
      "内存优化",
      "联邦 LoRA"
    ],
    "summary": "FAH-QLoRA 把底座模型量化到 4-bit 以减少内存占用，再通过两阶段自适应 rank 分配让异构设备各取所需的能力，同时降低训练时间和显存开销。",
    "problem": "联邦 LoRA 微调虽然可训练参数少，但底座模型仍需完整加载到显存——LLaMA-7B 16-bit LoRA 需约 19.5 GB，边缘设备根本装不下。",
    "method": "底座量化（大幅降低内存占用）+ 两阶段自适应 rank（先确定满足时延的 rank 上界，再在能耗约束下精细化分配）。",
    "takeaway": "量化 + LoRA 不是两个独立技术的简单拼接，底座量化释放的内存空间可以被更灵活地用于提高 rank 或支持更大 batch。",
    "citation": "Gao, Z., Zhang, Z., Guo, Y., and Gong, Y. Federated Adaptive Fine-Tuning of Large Language Models with Heterogeneous Quantization and LoRA. IEEE INFOCOM 2025.",
    "links": []
  },
  {
    "id": "525-fedara",
    "articleNo": "525",
    "articleDate": "2026-05-25",
    "order": 15,
    "title": "截断SVD + 重要性投票 + 模块级剪枝：FedARA 的「结构-通信-计算」三重优化",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE TC",
    "venueGroup": "IEEE TC",
    "paperYear": "2026",
    "paperName": "Adaptive Rank Allocation for Federated Parameter-Efficient Fine-Tuning of Language Models",
    "authors": "Fei Wu, Jia Hu, Geyong Min, Shiqiang Wang",
    "cover": "assets/cover-fedara.png",
    "topics": [
      "lora",
      "fine-tuning",
      "resource",
      "rank"
    ],
    "topicLabels": [
      "SVD 截断",
      "模块剪枝"
    ],
    "routes": [
      "lora",
      "resource"
    ],
    "keywords": [
      "FedARA",
      "截断SVD",
      "动态 rank",
      "模块剪枝",
      "结构优化",
      "联邦 LoRA"
    ],
    "summary": "FedARA 把 LoRA 的 rank 分配问题推进到「结构-通信-计算」三个维度联合优化的层面，用截断 SVD 压缩参数、重要性投票挑模块、模块级剪枝砍冗余。",
    "problem": "Non-IID 数据下联邦 PEFT 的精度下降比全参数联邦微调更严重，现有的异构 rank 方案只考虑通信-计算二维，忽略了模型结构维度的优化空间。",
    "method": "截断 SVD 降低 rank 内的通信量 + 重要性投票选出关键模块 + 模块级剪枝砍掉贡献小的层，三者联合优化形成结构-通信-计算三重闭环。",
    "takeaway": "rank 分配不仅要看设备和信道，还要看模块本身的重要性——不是所有模块的 rank 都应该用同一种分配策略。",
    "citation": "Wu, F., Hu, J., Min, G., and Wang, S. Adaptive Rank Allocation for Federated Parameter-Efficient Fine-Tuning of Language Models. IEEE Transactions on Computers, 75(4), 2026.",
    "links": []
  },
  {
    "id": "526-kg-cs",
    "articleNo": "526",
    "articleDate": "2026-05-26",
    "order": 16,
    "title": "离线 KG + 在线选择：联邦 LLM 微调的「数据异构感知」客户端调度方案",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2026",
    "paperName": "Data Divergence-Aware Client Selection via Knowledge Graph for Federated LLM Fine-Tuning",
    "authors": "Bihai Zhang, Dan Wang, Yifei Zhu, Zhu Han",
    "cover": "assets/cover-kg-cs.png",
    "topics": [
      "fine-tuning",
      "resource",
      "data-heterogeneity"
    ],
    "topicLabels": [
      "知识图谱",
      "Client Selection"
    ],
    "routes": [
      "resource"
    ],
    "keywords": [
      "KG-CS",
      "知识图谱",
      "客户端选择",
      "数据异构",
      "PASA",
      "概率优化",
      "联邦微调"
    ],
    "summary": "把 client selection 从「边训边测」变成「先建图、再选择」：离线用知识图谱衡量客户端数据差异，在线用 PASA 概率优化兼顾系统异构与统计异构。",
    "problem": "联邦 LLM 微调总共几十轮，在线测量数据异构代价太高；系统异构（straggler）和统计异构（Non-IID）互相放大，大部分方案只能按住一头。",
    "method": "离线构建知识图谱（抽取三元组→补全→对齐）度量数据差异，在线用 PASA 概率优化联合最小化收敛时延与数据异构度。",
    "takeaway": "两阶段范式（离线度量+在线决策）比具体用什么知识表示更重要——任何 FL 场景下，只要测量成本远高于决策成本，这个拆分就值得考虑。",
    "citation": "Zhang, B., Wang, D., Zhu, Y., and Han, Z. Data Divergence-Aware Client Selection via Knowledge Graph for Federated LLM Fine-Tuning. IEEE Transactions on Mobile Computing, 25(2):2399-2412, 2026.",
    "links": []
  },
  {
    "id": "527-flm-topk",
    "articleNo": "527",
    "articleDate": "2026-05-27",
    "order": 17,
    "title": "FLM-TopK：把梯度「分区间」后再稀疏，联邦 LLM 微调能省多少通信？",
    "type": "论文精读",
    "level": "深入",
    "venue": "arXiv",
    "venueGroup": "arXiv",
    "paperYear": "2025",
    "paperName": "FLM-TopK: Expediting Federated Large Language Model Tuning by Sparsifying Intervalized Gradients",
    "authors": "Wenqi Qiu, Yipeng Zhou, Jinzhi Wang, Quan Z. Sheng, Laizhong Cui",
    "cover": "assets/cover-flm-topk.png",
    "topics": [
      "fine-tuning",
      "resource",
      "lora"
    ],
    "topicLabels": [
      "梯度压缩",
      "TopK 稀疏"
    ],
    "keywords": [
      "FLM-TopK",
      "梯度压缩",
      "TopK",
      "区间化",
      "PID 开销",
      "LoRA",
      "联邦 LLM 微调"
    ],
    "summary": "FLM-TopK 不在全局梯度向量上直接做 TopK，而是先把梯度划分成多个区间，再在区间内独立稀疏化，从而显著降低位置编号 PID 的通信开销。",
    "problem": "联邦 LLM 微调中客户端需要反复上传 LoRA 梯度，TopK 稀疏化虽然能减少梯度值数量，但百万级梯度维度会让位置编号 PID 开销变得很重。",
    "method": "基于 LLM 微调梯度更接近高斯分布的观察，先对梯度做区间化，再在每个区间内执行 TopK，并通过交替凸优化联合选择区间大小、稀疏策略和分包参数。",
    "takeaway": "通信压缩不能只看传多少梯度值，也要看位置编码和压缩误差；区间化 TopK 是一类兼顾 PID 开销、精度和可部署性的梯度压缩思路。",
    "citation": "Qiu, W., Zhou, Y., Wang, J., Sheng, Q. Z., and Cui, L. FLM-TopK: Expediting Federated Large Language Model Tuning by Sparsifying Intervalized Gradients. 2025.",
    "links": []
  },
  {
    "id": "528-perazzone-lyapunov",
    "articleNo": "528",
    "articleDate": "2026-05-28",
    "order": 18,
    "title": "FL 设备调度最怕偏差？反向概率加权让选择概率随便调",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE TON",
    "venueGroup": "IEEE TON",
    "paperYear": "2025",
    "paperName": "Communication-Efficient Device Scheduling for Federated Learning Using Lyapunov Optimization",
    "authors": "Jake B. Perazzone, Shiqiang Wang, Mingyue Ji, Kevin Chan",
    "cover": "assets/cover-perazzone-lyapunov.png",
    "topics": [
      "resource",
      "scheduling"
    ],
    "topicLabels": [
      "设备调度",
      "Lyapunov 优化"
    ],
    "keywords": [
      "反向概率加权",
      "Lyapunov",
      "设备调度",
      "功率分配",
      "收敛界",
      "流形优化"
    ],
    "summary": "用 1/q 反向概率加权保证任意选择概率下的无偏收敛，将收敛界直接写入 Lyapunov 目标函数，功率用 Lambert W 解析解、设备选择用流形优化——最高 8.5× 加速。",
    "problem": "不均匀设备选择会导致模型漂移，而此前工作要么假设均匀选择要么把概率当固定参数，没有把收敛分析和在线调度连成一条线。",
    "method": "1/q 加权保证聚合无偏 → 推导非凸收敛界 → 将收敛界作为 Lyapunov 目标函数 → 功率用 Lambert W 解析解 + 设备选择用 Manopt 流形优化。",
    "takeaway": "收敛分析和调度设计可以解耦：1/q 加权保证无偏，调度器自由优化选择概率；把收敛界写进目标函数让 Lyapunov 调度直接为学习质量做优化。",
    "citation": "Perazzone, J. B., Wang, S., Ji, M., and Chan, K. Communication-Efficient Device Scheduling for Federated Learning Using Lyapunov Optimization. IEEE Trans. Netw., 33(4), 2025.",
    "links": []
  },
  {
    "id": "529-offsite-tuning",
    "articleNo": "529",
    "articleDate": "2026-05-29",
    "order": 19,
    "title": "异地微调 + 物理层安全 + 联合资源分配：大模型边缘部署的三角博弈",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2026",
    "paperName": "Optimizing Resource Allocation and Secure Wireless Communication in Large Model based Mobile Edge Computing Systems",
    "authors": "Zefan Wang, Jun Zhao, Yitong Wang",
    "cover": "assets/cover-offsite-tuning-pls.png",
    "topics": [
      "fine-tuning",
      "resource",
      "security"
    ],
    "topicLabels": [
      "异地微调",
      "物理层安全"
    ],
    "keywords": [
      "offsite-tuning",
      "物理层安全",
      "资源分配",
      "Dinkelbach",
      "SCA",
      "B&B",
      "分数规划"
    ],
    "summary": "将 adapter 提取比例和 emulator 压缩率作为优化变量，在物理层安全约束下与带宽、功率、GPU 频率联合求解，最大化效用-成本比。",
    "problem": "offsite-tuning 中 adapter 取多大、emulator 压多少、如何在窃听者存在下安全传输——三个决策共享物理资源但此前未在统一框架中优化。",
    "method": "Dinkelbach 变换处理分数目标 → 交替优化拆分子问题 → SCA + B&B 处理非凸约束和离散变量 → FP + KKT 推导闭式解。",
    "takeaway": "把模型架构参数（φ, χe）变成优化变量的思路比具体用了什么求解器更有复用价值——这在边缘大模型部署中还远未被充分挖掘。",
    "citation": "Wang, Z., Zhao, J., and Wang, Y. Optimizing Resource Allocation and Secure Wireless Communication in Large Model based Mobile Edge Computing Systems. IEEE Trans. Mobile Comput., 2026.",
    "links": []
  },
  {
    "id": "530-frlora",
    "articleNo": "530",
    "articleDate": "2026-05-30",
    "order": 20,
    "title": "FedAvg + LoRA 在 Non-IID 下为什么不够用？FRLoRA 用残差累积 + SVD 重初始化破局",
    "type": "论文精读",
    "level": "进阶",
    "venue": "ICLR",
    "venueGroup": "ICLR",
    "paperYear": "2025",
    "paperName": "Federated Residual Low-Rank Adaptation of Large Language Models",
    "authors": "Yunlu Yan, Chun-Mei Feng, Wangmeng Zuo, Rick Siow Mong Goh, Yong Liu, Lei Zhu",
    "cover": "assets/cover-frlora.png",
    "topics": [
      "fine-tuning",
      "lora"
    ],
    "topicLabels": [
      "LoRA",
      "Non-IID"
    ],
    "keywords": [
      "FRLoRA",
      "残差累积",
      "SVD 重初始化",
      "联邦 LoRA",
      "Non-IID",
      "client drift"
    ],
    "summary": "FedAvg+LoRA 在 Non-IID 下的失效根植于 rank 约束锁死全局更新空间和 LoRA 特有的 client drift。FRLoRA 用残差累积突破 rank 上限、SVD 重初始化消除漂移。",
    "problem": "FedAvg+LoRA 在 Non-IID 数据下表现差，且 FedProx/SCAFFOLD 等为 FFT 设计的联邦优化算法套到 LoRA 上反而更差。",
    "method": "残差累积 ΔW^t 叠加到全局权重（突破单轮 rank≤r 限制）+ 每轮 SVD 重初始化 B_k/A_k 到主奇异空间（消除 client drift）。两个机制互补。",
    "takeaway": "LoRA-based FL 的 Non-IID 问题需要全新解法，不能复用 FFT 时代的工具箱；残差累积和 SVD 重初始化不是独立改进，而是相互依赖——前者提供空间，后者稳定方向。",
    "citation": "Yan, Y., Feng, C.-M., Zuo, W., Goh, R. S. M., Liu, Y., and Zhu, L. Federated Residual Low-Rank Adaptation of Large Language Models. In Proc. ICLR, 2025.",
    "links": []
  },
  {
    "id": "531-fed-hello",
    "articleNo": "531",
    "articleDate": "2026-05-31",
    "order": 21,
    "title": "异构设备上 LoRA 层该怎么分？Fed-HeLLo：关键层给强设备、弱设备只训核心",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TNNLS",
    "venueGroup": "IEEE TNNLS",
    "paperYear": "2025",
    "paperName": "Fed-HeLLo: Efficient Federated Foundation Model Fine-Tuning With Heterogeneous LoRA Allocation",
    "authors": "Jianyi Zhang, Yilian Zhao, Haoze Lv, Yiran Wang, Sijing Xie, Salim El Rouayheb",
    "cover": "assets/cover-fed-hello.png",
    "topics": [
      "fine-tuning",
      "lora",
      "resource"
    ],
    "topicLabels": [
      "LoRA 分配",
      "层冻结"
    ],
    "keywords": [
      "Fed-HeLLo",
      "异构 LoRA",
      "FIM-HLA",
      "GD-HLA",
      "层冻结",
      "联邦微调"
    ],
    "summary": "Fed-HeLLo 不追问每层给多少 rank，而是追问哪些层值得训。FIM-HLA 每轮动态打分，GD-HLA 用几何先验冷启动，-38% 计算量 + 更强精度。",
    "problem": "异构设备参与联邦 LoRA 微调时，弱设备训不动全量 LoRA 层——此前方法降 rank 但内存瓶颈在激活值存储不在参数本身。",
    "method": "FIM-HLA 用 Fisher 信息矩阵每轮给 LoRA 层动态打分 + RGD-HLA 用四种几何模式（三角形/倒三角形/瓶颈/均匀）做冷启动和覆盖保证，两策略交替使用。",
    "takeaway": "资源异构场景下'选对层'比'每层少训一点'更有效——少训几层但训满 rank 比每层都训但 r=1 能更完整地保留任务子空间信息。",
    "citation": "Zhang, J., Zhao, Y., Lv, H., Wang, Y., Xie, S., and El Rouayheb, S. Fed-HeLLo: Efficient Federated Foundation Model Fine-Tuning With Heterogeneous LoRA Allocation. IEEE Trans. Neural Netw. Learn. Syst., 36(10), 2025.",
    "links": []
  },
  {
    "id": "61-aircomp-lora-disaster",
    "articleNo": "61",
    "articleDate": "2026-06-01",
    "order": 22,
    "title": "无人机灾后救援 + AirComp + LoRA：生成式模型的联邦微调怎样才能最省电？",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TCCN",
    "venueGroup": "IEEE TCCN",
    "paperYear": "2026",
    "paperName": "Energy-Efficient Over-the-Air Computation for Federated Generative Model Fine-Tuning in Unmanned Vehicle-Assisted Disaster Relief",
    "authors": "Yikun Zhao, Lei Feng, Fanqin Zhou, Wenjing Li, Zehui Xiong, Hongyang Du, Celimuge Wu, Song Guo, Tony Q. S. Quek, Zhu Han",
    "cover": "assets/cover-aircomp-lora-disaster.png",
    "topics": [
      "fine-tuning",
      "lora",
      "resource"
    ],
    "topicLabels": [
      "AirComp",
      "联邦 LoRA",
      "生成式模型"
    ],
    "keywords": [
      "AirComp",
      "联邦 LoRA",
      "Stable Diffusion",
      "灾后救援",
      "BCD",
      "能耗优化"
    ],
    "summary": "把 AirComp、LoRA 和扩散模型放到 UAV/UGV 灾后救援场景里，联合优化带宽、功率、算力和去噪因子，让生成式模型联邦微调在保证图像质量的同时降低系统能耗。",
    "problem": "灾后救援中的 UGV 数据分散、电池有限、无线带宽紧，传统联邦微调需要多设备分别上传 LoRA，通信能耗随设备数增长；AirComp 又会引入直接耦合到 LoRA 权重的聚合失真。",
    "method": "构建 UAV 辅助的 AirComp 联邦生成式模型微调框架，将系统能耗和 AirComp MSE 约束写入同一优化问题，并用 BCD 分解带宽、功率、算力和去噪因子四个子问题。",
    "takeaway": "AirComp 的'聚合即通信'适合多 UGV 协作场景，但在 LoRA 扩散模型中必须正视信道噪声与 rank、MSE 容忍度之间的耦合，资源优化不能只看通信量。",
    "citation": "Zhao, Y., Feng, L., Zhou, F., Li, W., Xiong, Z., Du, H., Wu, C., Guo, S., Quek, T. Q. S., and Han, Z. Energy-Efficient Over-the-Air Computation for Federated Generative Model Fine-Tuning in Unmanned Vehicle-Assisted Disaster Relief. IEEE Trans. Cogn. Commun. Netw., 12, 2026.",
    "links": []
  },
  {
    "id": "62-eh-quantization",
    "articleNo": "62",
    "articleDate": "2026-06-02",
    "order": 23,
    "title": "能量采集 + 联邦学习：客户端选择和量化精度怎么联合优化才不浪费能源？",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TWC",
    "venueGroup": "IEEE TWC",
    "paperYear": "2024",
    "paperName": "Joint Client Scheduling and Quantization Optimization in Energy Harvesting-Enabled Federated Learning Networks",
    "authors": "Zhengwei Ni, Zhaoyang Zhang, Nguyen Cong Luong, Dusit Niyato, Dong In Kim, Shaohan Feng",
    "cover": "assets/cover-eh-quantization.png",
    "topics": [
      "resource",
      "quantization",
      "data-heterogeneity"
    ],
    "topicLabels": [
      "能量采集",
      "客户端调度",
      "模型量化"
    ],
    "keywords": [
      "Energy Harvesting",
      "客户端选择",
      "随机量化",
      "能量因果",
      "公平调度",
      "MINLP"
    ],
    "summary": "在 EH 供电的 FL 网络中联合优化客户端选择、量化精度和传输能耗，用 MINLP 到凸等价变换求全局最优，同时证明固定量化精度仍不损 O(1/T) 收敛速率。",
    "problem": "能量采集设备只能先采集后使用，客户端调度不能只看数据和信道；量化精度越高上传能耗越大，而过度贪心选择高能量设备又会在 Non-IID 下破坏数据覆盖。",
    "method": "基于收敛界构造带 A_t 权重的量化误差目标，加入能量因果、频谱效率和公平调度约束，再用 big-M 辅助变量把非凸耦合改写为凸 MINLP。",
    "takeaway": "EH 联邦学习里的资源分配核心不是单纯省电，而是在能量因果、量化精度和数据公平之间做全局权衡；早期训练轮次的量化精度尤其关键。",
    "citation": "Ni, Z., Zhang, Z., Luong, N. C., Niyato, D., Kim, D. I., and Feng, S. Joint Client Scheduling and Quantization Optimization in Energy Harvesting-Enabled Federated Learning Networks. IEEE Trans. Wireless Commun., 23(8), 2024.",
    "links": []
  },
  {
    "id": "63-freezing-power",
    "articleNo": "63",
    "articleDate": "2026-06-03",
    "order": 24,
    "title": "参数冻结 + 功率控制：一个双时间尺度的 Lyapunov 框架，把联邦训练的能耗压到最低",
    "type": "论文精读",
    "level": "深入",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2025",
    "paperName": "A Two-Timescale Approach for Wireless Federated Learning With Parameter Freezing and Power Control",
    "authors": "Jinhao Ouyang, Yuan Liu, Hang Liu",
    "cover": "assets/cover-freezing-power.png",
    "topics": [
      "lyapunov",
      "resource"
    ],
    "topicLabels": [
      "Lyapunov 优化",
      "参数冻结",
      "功率控制"
    ],
    "keywords": [
      "参数冻结",
      "双时间尺度",
      "Lyapunov",
      "功率控制",
      "能耗优化",
      "无线联邦学习"
    ],
    "summary": "利用训练中后期大量参数趋于稳定的现象，大时间尺度决定冻结比例、小时间尺度做功率控制，用 Lyapunov 虚拟队列同时压低能耗和收敛误差。",
    "problem": "联邦训练后期很多参数已基本稳定，却仍被完整计算和上传；冻结可以省电，但冻结过多会伤收敛，功率控制又会影响传输中断和长期能量预算。",
    "method": "把训练划分为帧和时隙，建立冻结误差与中断误差的收敛界，并通过 Lyapunov 漂移加惩罚将问题分解为大时间尺度的冻结比例子问题和小时间尺度的功率控制子问题。",
    "takeaway": "参数冻结和功率控制必须联动：冻结减少计算通信量，功率减少中断，两者共享长期能量预算；双时间尺度分解让这类无线 FL 能耗控制可以用闭式解在线执行。",
    "citation": "Ouyang, J., Liu, Y., and Liu, H. A Two-Timescale Approach for Wireless Federated Learning With Parameter Freezing and Power Control. IEEE Trans. Mobile Comput., 24(9), 2025.",
    "links": []
  },
  {
    "id": "64-sfl-imbalance",
    "articleNo": "64",
    "articleDate": "2026-06-03",
    "order": 24,
    "title": "类别不平衡 + 设备异构 + 模型切分：一个 SFL 框架同时解决三个联邦痛点",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TWC",
    "venueGroup": "IEEE TWC",
    "paperYear": "2025",
    "paperName": "Tackling Class Imbalance and Client Heterogeneity for Split Federated Learning in Wireless Networks",
    "authors": "Chunfeng Xie, Zhixiong Chen, Wenqiang Yi, Hyundong Shin, Arumugam Nallanathan",
    "cover": "assets/cover-64.png",
    "topics": [
      "data-heterogeneity",
      "resource"
    ],
    "topicLabels": [
      "Split FL",
      "类别不平衡",
      "设备异构"
    ],
    "keywords": [
      "类别不平衡",
      "Split Federated Learning",
      "模型切分",
      "设备异构",
      "无线网络"
    ],
    "summary": "一个统一的 SFL 框架同时处理类别不平衡（数据侧）、设备异构（算力侧）和模型切分（系统侧）三个问题。",
    "problem": "类别不平衡导致全局模型偏向多数类，设备异构使统一切分不可行，现有方案各自解决单一问题。",
    "method": "设计类别感知的损失重加权+自适应模型切分策略，在 SFL 框架下联合优化。",
    "takeaway": "三个问题（数据、算力、系统）在 SFL 框架下存在耦合——分开解决不如联合优化有效。",
    "citation": "Xie, C., Chen, Z., Yi, W., Shin, H., and Nallanathan, A. Tackling Class Imbalance and Client Heterogeneity for Split Federated Learning in Wireless Networks. IEEE Trans. Wireless Commun., 24(6), Jun. 2025.",
    "links": []
  },
  {
    "id": "65-zorba",
    "articleNo": "65",
    "articleDate": "2026-06-05",
    "order": 25,
    "title": "零阶优化 + 异构块激活：联邦微调 LLM 如何同时省显存和省通信",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE INFOCOM",
    "venueGroup": "IEEE INFOCOM",
    "paperYear": "2026",
    "paperName": "ZorBA: Zeroth-order Federated Fine-tuning of LLMs with Heterogeneous Block Activation",
    "authors": "Chuiyang Meng, Ming Tang, Vincent W.S. Wong",
    "cover": "assets/cover-65.png",
    "topics": [
      "fine-tuning",
      "resource"
    ],
    "topicLabels": [
      "零阶优化",
      "FedFT",
      "内存效率"
    ],
    "keywords": [
      "零阶优化",
      "联邦微调",
      "异构块激活",
      "显存约束",
      "通信压缩"
    ],
    "summary": "用零阶优化(仅需前向传播)替代一阶反向传播，结合客户端自适应异构块激活——在严格显存和通信约束下实现联邦 LLM 微调。",
    "problem": "标准 FL+LoRA 仍需保存激活和梯度，显存和通信仍是瓶颈。零阶优化省去反向传播但收敛慢。",
    "method": "零阶梯度估计(仅需前向)+异构块激活(每设备根据显存容量激活不同层数)，在 FedAvg 框架下聚合。",
    "takeaway": "零阶优化的内存优势在联邦 LLM 微调中特别适合边缘设备——前向传播的显存远小于反向传播。代价是收敛需要更多轮次。",
    "citation": "Meng, C., Tang, M., and Wong, V.W.S. ZorBA: Zeroth-order Federated Fine-tuning of LLMs with Heterogeneous Block Activation. In Proc. IEEE INFOCOM, 2026.",
    "links": []
  },
  {
    "id": "66-fedkrso",
    "articleNo": "66",
    "articleDate": "2026-06-05",
    "order": 26,
    "title": "K 个随机种子替代全参数传输：FedKRSO 如何让联邦全参数微调的通信和显存降到 LoRA 级别",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE INFOCOM",
    "venueGroup": "IEEE INFOCOM",
    "paperYear": "2026",
    "paperName": "FedKRSO: Communication and Memory Efficient Federated Fine-Tuning of Large Language Models",
    "authors": "Guohao Yang, Tongle Wu, Yuanxiong Guo, Ying Sun, Yanmin Gong",
    "cover": "assets/cover-66.png",
    "topics": [
      "fine-tuning",
      "resource"
    ],
    "topicLabels": [
      "FedFT",
      "通信压缩",
      "随机种子"
    ],
    "keywords": [
      "全参数微调",
      "随机种子",
      "通信压缩",
      "显存效率",
      "联邦学习"
    ],
    "summary": "用 K 个随机种子+共享随机性替代全参数传输——联邦全参数微调达到 LoRA 级别的通信和显存开销。",
    "problem": "LoRA 的性能上限低于全参数微调，但全参数微调在联邦场景下通信和显存开销巨大。",
    "method": "客户端和服务端共享随机种子→生成相同的随机投影矩阵→客户端上传低维投影而非全参数更新→服务端重建。",
    "takeaway": "共享随机性是压缩 FL 通信的一个精致技巧——投影矩阵不需要传输，因为双方用相同的种子可以重新生成。性能几乎达到全参数微调上限。",
    "citation": "Yang, G., Wu, T., Guo, Y., Sun, Y., and Gong, Y. FedKRSO: Communication and Memory Efficient Federated Fine-Tuning of Large Language Models. In Proc. IEEE INFOCOM, 2026.",
    "links": []
  },
  {
    "id": "67-aircomp-dp",
    "articleNo": "67",
    "articleDate": "2026-06-07",
    "order": 27,
    "title": "空中计算 + 差分隐私：AdaScale 如何用一个标量在线平衡联邦学习的收敛和隐私",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE INFOCOM",
    "venueGroup": "IEEE INFOCOM",
    "paperYear": "2026",
    "paperName": "Privacy Enhancement in Over-the-Air Federated Learning via Adaptive Receive Scaling",
    "authors": "Faeze Moradi Kalarde, Ben Liang, Min Dong, Yahia A. Eldemerdash Ahmed, Ho Ting Cheng",
    "cover": "assets/cover-67.png",
    "topics": [
      "resource",
      "data-heterogeneity"
    ],
    "topicLabels": [
      "空中计算",
      "差分隐私",
      "自适应缩放"
    ],
    "keywords": [
      "Over-the-Air FL",
      "差分隐私",
      "自适应接收缩放",
      "隐私-收敛平衡",
      "在线优化"
    ],
    "summary": "在 Over-the-Air FL 中，用 AdaScale——一个在线自适应接收端标量缩放因子——动态平衡差分隐私噪声和收敛速度。",
    "problem": "Over-the-Air FL 的空中聚合天然引入信道噪声，加上 DP 噪声后收敛严重退化。固定缩放因子无法适应时变信道。",
    "method": "AdaScale：服务器根据本轮信道状态和当前收敛阶段在线调整接收端缩放因子→在不额外增加通信的前提下优化隐私-收敛权衡。",
    "takeaway": "空中计算场景下的隐私保护不能照搬标准 FL 的方法——信道噪声和 DP 噪声在聚合时叠加，需要联合管理。AdaScale 用一个标量实现这一点。",
    "citation": "Kalarde, F. M., Liang, B., Dong, M., Ahmed, Y. A. E., and Cheng, H. T. Privacy Enhancement in Over-the-Air Federated Learning via Adaptive Receive Scaling. In Proc. IEEE INFOCOM, 2026.",
    "links": []
  },
  {
    "id": "610-llm-dt-lyapunov",
    "articleNo": "610",
    "articleDate": "2026-06-10",
    "order": 28,
    "title": "LLM 替代 MARL + Lyapunov 队列管理：DT 边缘网络中任务卸载与资源分配的新范式",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2026",
    "paperName": "Large Language Model-Based Task Offloading and Resource Allocation for Digital Twin Edge Computing Networks",
    "authors": "Qiong Wu, Yu Xie, Pingyi Fan, Dong Qin, Kezhi Wang, Nan Cheng, Khaled B. Letaief",
    "cover": "assets/cover-610.png",
    "topics": [
      "resource",
      "fine-tuning",
      "intro"
    ],
    "topicLabels": [
      "DT",
      "Lyapunov",
      "LLM"
    ],
    "keywords": [
      "数字孪生",
      "Lyapunov优化",
      "LLM",
      "In-Context Learning",
      "MARL",
      "任务卸载",
      "资源分配"
    ],
    "summary": "Lyapunov 将长期队列稳定约束转为每轮可解问题，LLM in-context learning 零训练替代 MARL 做任务卸载——两个工具的协作比各自单独使用更有范式意义。",
    "problem": "MARL 每次换场景需要重新训练，泛化差。LLM 推理时延高，不适合毫秒级实时调度。",
    "method": "Lyapunov 漂移+惩罚把长期队列稳定转为每轮短期决策，LLM 从 MARL 生成的 case set 中检索相似案例进行 in-context 推理。",
    "takeaway": "LLM 替代 DRL 适合秒级决策场景（任务卸载），不适合毫秒级实时控制。Lyapunov 简化后的决策空间降低了 LLM 推理难度。",
    "citation": "Wu, Q., Xie, Y., Fan, P., Qin, D., Wang, K., Cheng, N., and Letaief, K. B. Large Language Model-Based Task Offloading and Resource Allocation for Digital Twin Edge Computing Networks. IEEE Trans. Mobile Comput., 25(7), Jul. 2026.",
    "links": []
  },
  {
    "id": "611-split-ft",
    "articleNo": "611",
    "articleDate": "2026-06-11",
    "order": 29,
    "title": "Split Fine-Tuning：拆分 LLM + 激活压缩 + 双时间尺度资源管理",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE JSTSP",
    "venueGroup": "IEEE JSTSP",
    "paperYear": "2025",
    "paperName": "Split Fine-Tuning for Large Language Models in Wireless Networks",
    "authors": "Songge Zhang, Guoliang Cheng, Wen Wu, Xinyu Huang, Lingyang Song, Xuemin Shen",
    "cover": "assets/cover-611.png",
    "topics": [
      "fine-tuning",
      "resource",
      "data-heterogeneity"
    ],
    "topicLabels": [
      "拆分微调",
      "LoRA",
      "资源管理"
    ],
    "keywords": [
      "Split Learning",
      "LoRA微调",
      "激活压缩",
      "Augmented Lagrangian",
      "SQP",
      "双时间尺度"
    ],
    "summary": "将 LLM 拆分到设备端和服务端、用 Top-K 稀疏+随机量化+无损编码级联压缩中间激活、通过 Augmented Lagrangian + SQP 双时间尺度求解 MINLP。",
    "problem": "移动设备显存不足运行完整 LLM，拆分后中间激活通信量可达 2.81GB/epoch。",
    "method": "SFT 拆分 Transformer 层+并行设备端训练，Top-K 稀疏→随机量化→Golomb 编码压缩，P→P1(AL)+P2(SQP)双时间尺度分解求解。",
    "takeaway": "拆分+压缩+双时间尺度优化的组合是解决移动端 LLM 微调瓶颈的系统方案。PL 条件下的收敛上界与压缩参数之间的定量关系仍是开放问题。",
    "citation": "Zhang, S., Cheng, G., Wu, W., Huang, X., Song, L., and Shen, X. Split Fine-Tuning for Large Language Models in Wireless Networks. IEEE J. Sel. Topics Signal Process., 19(7), Oct. 2025.",
    "links": []
  },
  {
    "id": "614-cmab-stackelberg",
    "articleNo": "614",
    "articleDate": "2026-06-14",
    "order": 30,
    "title": "CMAB + Stackelberg：联邦学习客户端质量发现与收敛保证激励",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2026",
    "paperName": "Learning to Incentivize: Convergence-Guaranteed Federated Learning via Client Quality Discovery",
    "authors": "Jiajun Wang, Jianxiong Guo, Juncheng Wang, Xingjian Ding, Deying Li, Weili Wu",
    "cover": "assets/cover-614.png",
    "topics": [
      "resource",
      "data-heterogeneity",
      "fine-tuning"
    ],
    "topicLabels": [
      "CMAB",
      "Stackelberg",
      "激励机制"
    ],
    "keywords": [
      "客户端选择",
      "数据质量",
      "梯度差异",
      "CMAB",
      "Stackelberg博弈",
      "FL收敛",
      "激励机制"
    ],
    "summary": "梯度差异 δ_i^t(理论等价 EMD)度量数据质量→CMAB 在线选择高质量客户端→FL 收敛上界嵌入 Stackelberg 效用函数→逆向归纳+KKT 证明非凸均衡存在唯一。",
    "problem": "聚合器无法评估客户端数据质量，高质量客户端缺乏贡献数据的激励，现有激励机制不与 FL 收敛理论挂钩。",
    "method": "CUCB 探索-利用选择客户端，Stackelberg 博弈中聚合器效用嵌入收敛上界，逆向归纳+KKT 条件证明均衡存在唯一(跟随者闭式+领导者 Newton 法)。",
    "takeaway": "三层理论(bandit regret + FL convergence + game equilibrium)通过 δ_i^t 接口变量耦合。非凸均衡的证明路径比闭式解本身更有方法论迁移价值。",
    "citation": "Wang, J., Guo, J., Wang, J., Ding, X., Li, D., and Wu, W. Learning to Incentivize: Convergence-Guaranteed Federated Learning via Client Quality Discovery. IEEE Trans. Mobile Comput., 25(5), pp. 6767-6783, May 2026.",
    "links": []
  },
  {
    "id": "617-fedkd",
    "articleNo": "617",
    "articleDate": "2026-06-17",
    "order": 31,
    "title": "FedKD：Tucker 张量分解 + 对抗蒸馏，大模型与小模型如何联合联邦微调",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2026",
    "paperName": "FedKD: A Fine-Grained Parameter-Efficient Federated Co-Tuning Framework With Knowledge Decoupling for Large and Small Foundation Models",
    "authors": "Min Gao, Haifeng Zheng, Jiayuan Lin, Xinxin Feng, Youjia Chen",
    "cover": "assets/cover-617.png",
    "topics": [
      "fine-tuning",
      "resource",
      "data-heterogeneity"
    ],
    "topicLabels": [
      "FedFM",
      "Tucker",
      "知识解耦"
    ],
    "keywords": [
      "Tucker分解",
      "知识解耦",
      "对抗蒸馏",
      "云边协同",
      "模型异构",
      "PTLoRA",
      "KDMD"
    ],
    "summary": "perTucker 张量分解显式分离全局/局部知识（layer-sharing 保跨层一致性）→ KDMD 两阶段对抗蒸馏隐式解耦（判别器 + GRL 过滤节点特有知识）→ 同时解决模型异构（云大边小）和数据异构（模态+类别）",
    "problem": "FedFM 面临模型异构（云大边小）和数据异构的双重挑战。FedAvg 失效（参数不共享），知识蒸馏传递纠缠知识（通用+节点特有+噪声）反而恶化泛化。",
    "method": "PTLoRA 将 L 层权重堆叠为三维张量，perTucker 分解为全局+局部组件（layer-sharing 保一致性）。KDMD：边→云对抗蒸馏（判别器 D + GRL 过滤节点特有知识），云→边 KL 蒸馏弥补模型差距。三块交替优化，backbone 全程冻结。",
    "takeaway": "FedKD 的本质是把 FedFM 的聚合从参数空间对齐（FedAvg）切换到知识空间对齐（蒸馏），对抗判别器过滤是使得知识解耦可行的关键——这可能是异构联邦的标配方案。",
    "citation": "Gao, M., Zheng, H., Lin, J., Feng, X., and Chen, Y. FedKD: A Fine-Grained Parameter-Efficient Federated Co-Tuning Framework With Knowledge Decoupling for Large and Small Foundation Models. IEEE Trans. Mobile Comput., Early Access, 2026.",
    "links": [
      {
        "label": "Code",
        "url": "https://github.com/Aprilmin/FedKD"
      }
    ]
  },
  {
    "id": "618-dybap",
    "articleNo": "618",
    "articleDate": "2026-06-18",
    "order": 32,
    "title": "DyBAP：动态批处理 + 自适应划分——端-边-云三级 LLM 推理部署",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2026",
    "paperName": "Joint Optimization of Dynamic Batching and Adaptive Partitioning for Distributed LLMs Inference in Mobile Edge Computing",
    "authors": "Tong Zheng, Yuanguo Bi, Guangjie Han, Tianao Xiang, Lexi Xu, Qiang He, Liang Zhao",
    "cover": "assets/cover-618.png",
    "topics": [
      "fine-tuning",
      "resource"
    ],
    "topicLabels": [
      "LLM推理",
      "边缘部署",
      "MARL"
    ],
    "keywords": [
      "LLM推理",
      "动态批处理",
      "自适应划分",
      "MARL",
      "Pipeline并行",
      "端边云协作"
    ],
    "summary": "GPU 幂律拟合 + CPU Amdahl 修正建模计算延迟→动态批融合自适应控制 batch→MARL 逐 block 决策→延迟-17.94%，内存-11.12%。",
    "problem": "LLM 边缘推理：batch size 悖论、block 分配 NP-hard、移动性使问题在线化。",
    "method": "动态批融合（效益-成本在线决策）+ MARL 块感知分区（POMDP+移动感知+渐进信用分配+PPO/GAE）。",
    "takeaway": "batch size 和 partition 耦合——先松弛内存约束再优化延迟的分层策略在高维整数规划中实用。MARL 替代 MILP 是移动场景的合理选择。",
    "citation": "Zheng, T., Bi, Y., Han, G., Xiang, T., Xu, L., He, Q., and Zhao, L. DyBAP: Joint Optimization of Dynamic Batching and Adaptive Partitioning for Distributed LLMs Inference in MEC. IEEE Trans. Mobile Comput., 25(6), pp.8747-8763, Jun. 2026.",
    "links": []
  },
  {
    "id": "619-coopllm-cache",
    "articleNo": "619",
    "articleDate": "2026-06-18",
    "order": 33,
    "title": "CoopLLM-Cache：LLM 做多基站协作缓存——SFT+GRPO 两阶段对齐 + 零样本迁移",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2026",
    "paperName": "Cooperative Edge Caching with Large Language Model in Wireless Networks",
    "authors": "Ning Yang, Wentao Wang, Lingtao Ouyang, Haijun Zhang",
    "cover": "assets/cover-619.png",
    "topics": [
      "resource",
      "intro"
    ],
    "topicLabels": [
      "LLM决策",
      "边缘缓存",
      "GRPO"
    ],
    "keywords": [
      "LLM Agent",
      "边缘缓存",
      "SFT",
      "GRPO",
      "冻结轨迹评估",
      "零样本迁移"
    ],
    "summary": "LLM 作多基站协作缓存控制器：状态→文本 prompt→结构化替换指令→严格解析校验。SFT 专家轨迹+GRPO 机会感知奖励→命中率达穷举 98.9%(0.610 vs 0.617)，零样本迁移四维度。",
    "problem": "多基站缓存决策耦合、DRL 换场景必重训、文本接口天然支持变长输入。",
    "method": "SFT(QLoRA r=64, 仅满缓存样本)→GRPO(前瞻价值 H_H + Delta 增益 + 格式/机会惩罚 + 组内归一化)。Qwen2.5-7B-Instruct。",
    "takeaway": "LLM 替代 DRL 的根源是文本接口的输入结构不变性而非推理能力差异。SFT 提供语法后 GRPO 才能生效——非法率零→非零 Delta 信号。",
    "citation": "Yang, N., Wang, W., Ouyang, L., and Zhang, H. Cooperative Edge Caching with Large Language Model in Wireless Networks. IEEE Trans. Mobile Comput., Early Access, 2026.",
    "links": [
      {
        "label": "Code",
        "url": "https://github.com/gracefulning/CoopLLM-Cache"
      }
    ]
  },
  {
    "id": "620-lyapunov-qmix",
    "articleNo": "620",
    "articleDate": "2026-06-19",
    "order": 34,
    "title": "Lyapunov + QMIX：细粒度逐层划分 + 多智能体边缘推理加速",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TMC",
    "venueGroup": "IEEE TMC",
    "paperYear": "2026",
    "paperName": "Adaptive Inference Acceleration with Fine-Grained Model Partitioning for Mobile Edge Intelligence",
    "authors": "Peng Wang, Long Huang, Wen Sun, Yi Yang, Dusit Niyato, Dapeng Oliver Wu",
    "cover": "assets/cover-620.png",
    "topics": [
      "resource",
      "fine-tuning"
    ],
    "topicLabels": [
      "Lyapunov",
      "QMIX",
      "推理加速"
    ],
    "keywords": [
      "Lyapunov优化",
      "QMIX",
      "细粒度划分",
      "多智能体RL",
      "队列稳定",
      "推理卸载"
    ],
    "summary": "逐层置信度分数 vs 阈值触发卸载→三层队列动力学→Lyapunov 漂移+惩罚(P1→P2, V=1 最优)→QMIX mixing network 协作求解→延迟降 68-72%，4 种 DNN 精度不变。",
    "problem": "DNN 推理一刀切分、队列不稳定→实时性崩溃。Lyapunov 解耦长期约束、QMIX 解决多 agent 竞争。",
    "method": "Lyapunov drift+penalty(V=1)+QMIX(mixing network 非负单调约束+经验回放+交替更新)。4 种 DNN(ResNet18/GoogleNet/AlexNet/VGG16)。",
    "takeaway": "Lyapunov+MARL 共享范式(与 610 同)。QMIX 单调性在多重耦合场景下可能不成立。精度不变意味着无法作为调度优化的信号。",
    "citation": "Wang, P., Huang, L., Sun, W., Yang, Y., Niyato, D., and Wu, D.O. Adaptive Inference Acceleration with Fine-Grained Model Partitioning for Mobile Edge Intelligence. IEEE Trans. Mobile Comput., Early Access, 2026.",
    "links": []
  },
  {
    "id": "626-aigc-stackelberg",
    "articleNo": "626",
    "articleDate": "2026-06-26",
    "order": 35,
    "title": "Stackelberg + PPO：车载边缘 AIGC 的信息不对称激励定价",
    "type": "论文精读",
    "level": "进阶",
    "venue": "IEEE TVT",
    "venueGroup": "IEEE TVT",
    "paperYear": "2026",
    "paperName": "A Learning-Based Incentive Mechanism for Mobile AIGC Service in Vehicular Edge Computing",
    "authors": "Xiangyu Li, Honglong Chen, Zhichen Ni, Haiyang Sun, Yubin Yang, Liantao Wu, Feng Xia",
    "cover": "assets/cover-626.png",
    "topics": [
      "resource",
      "data-heterogeneity"
    ],
    "topicLabels": [
      "AIGC",
      "Stackelberg",
      "PPO"
    ],
    "keywords": [
      "AIGC",
      "车载边缘计算",
      "Stackelberg博弈",
      "PPO",
      "信息不对称",
      "激励定价"
    ],
    "summary": "停车车辆闲置 GPU/CPU 作移动 AIGC 服务器→Stackelberg: 边服务器定(p_n,q_n)计算+通信奖励→车辆决定(f_m,n,r_m,n)→完全信息均衡唯一→PVRP(PPO)学定价, 私有参数不暴露。",
    "problem": "边服务器 AIGC 推理过载、车辆闲置算力未被利用、车辆私有参数(dwell time/算力)不愿披露。",
    "method": "多阶段 Stackelberg(计算+通信双维定价+线性配对概率 ρ_m,n=p_n/Σp_k)→PPO(Gaussian policy+Eq.46 奖励+Eq.47 学习目标)。",
    "takeaway": "AIGC 场景特有的通信回传定价 q_n 是增量。Stackelberg+PPO vs CMAB+Stackelberg(614): bandit 显式推断参数 vs PPO 隐式映射策略。",
    "citation": "Li, X., Chen, H., Ni, Z., Sun, H., Yang, Y., Wu, L., and Xia, F. A Learning-Based Incentive Mechanism for Mobile AIGC Service in Vehicular Edge Computing. IEEE Trans. Vehicular Technology, Early Access, 2026.",
    "links": []
  },
  {
    "id": "72-hybridflow",
    "articleNo": "72",
    "articleDate": "2026-07-01",
    "order": 37,
    "title": "HybridFlow：DAG分解+自适应路由——边云协作LLM推理的效费比最优",
    "type": "论文精读",
    "level": "进阶",
    "venue": "ICML",
    "venueGroup": "ICML",
    "paperYear": "2026",
    "paperName": "HybridFlow: Resource-Adaptive Subtask Routing for Efficient Edge-Cloud LLM Inference",
    "authors": "Jiangwen Dong, Jiayu Li, Tianhang Zheng, Wanyu Lin",
    "cover": "assets/cover-72.png",
    "topics": [
      "fine-tuning",
      "resource"
    ],
    "topicLabels": [
      "LLM推理",
      "DAG",
      "自适应路由"
    ],
    "keywords": [
      "DAG分解",
      "自适应路由",
      "边云协作",
      "效费比",
      "0-1背包",
      "Lagrangian"
    ],
    "summary": "Planner分解查询为DAG→依赖触发并行调度→效费比建模+0-1背包+Lagrangian松弛→MLP预测(含C_used)→对偶变量自适应阈值→55.34%精度,17.48s延迟。",
    "problem": "粗粒度路由+忽略依赖=双输。CoT全串行延迟高,SoT/PASTA强行并行正确性受损。",
    "method": "EAG元prompt分解DAG+依赖触发调度+ui=qi/(ci+ε)效费比+0-1背包Lagrangian→ri=I(qi/ci>λ)+MLP预测ûi。",
    "takeaway": "0-1背包→Lagrangian→对偶变量:路由问题的优化理论分析。DAG并行度上限由planner分解质量决定。",
    "citation": "Dong, J., Li, J., Zheng, T., and Lin, W. HybridFlow: Resource-Adaptive Subtask Routing for Efficient Edge-Cloud LLM Inference. Proc. ICML, 2026.",
    "links": [
      {
        "label": "Code",
        "url": "https://github.com/WanyuGroup/ICML2026_HybridFlow"
      }
    ]
  },
  {
    "id": "710-smartfed",
    "articleNo": "710",
    "articleDate": "2026-07-10",
    "order": 38,
    "title": "SMARTFED：LoRA仓库复用+秩级专家组装,联邦微调不用重训",
    "type": "论文精读",
    "level": "进阶",
    "venue": "ICML",
    "venueGroup": "ICML",
    "paperYear": "2026",
    "paperName": "Don't Reinvent the Wheel, Just Realign the Spokes: Resource-Efficient Federated Fine-Tuning via Rank-Wise Expert Assembly",
    "authors": "Yebo Wu, Jingguang Li, Zhijiang Guo, Li Li",
    "cover": "assets/cover-710.png",
    "topics": [
      "fine-tuning",
      "resource"
    ],
    "topicLabels": [
      "LoRA复用",
      "MoRE",
      "EEQA"
    ],
    "keywords": [
      "秩级专家",
      "LoRA仓库",
      "EEQA",
      "联邦微调",
      "ICML Spotlight"
    ],
    "summary": "LoRAHub检索已有LoRA→秩级分解M=Σr_n个专家→W_router Top-K稀疏激活(唯一可训练参)→EEQA按矩阵重要性自适应配额→+13.82%,3.95x加速,31.47x通信降低。",
    "problem": "标准联邦LoRA从零训练数百轮通信。开源社区已有海量LoRA模块可复用。",
    "method": "MoRE秩级分解(Eq.5)+Top-K路由(Eq.6-8)+s_Em=1-cos重要性(Eq.4)+α_j softmax配额(Eq.9-10)+Algorithm 1两阶段重分配。",
    "takeaway": "从训练到组装:LoRA说不要训练全量,SMARTFED说不要训练LoRA——低秩的平方策略。",
    "citation": "Wu, Y., Li, J., Guo, Z., and Li, L. Don't Reinvent the Wheel. Proc. ICML (Spotlight), 2026.",
    "links": [
      {
        "label": "Code",
        "url": "https://github.com/benmagnifico/SmartFed"
      }
    ]
  },
  {
    "id": "712-hetcpflora",
    "articleNo": "712",
    "articleDate": "2026-07-12",
    "order": 39,
    "title": "Het-CPFLoRA：LoRA列/行解耦+SVD聚合,单适配器实现异构个性化联邦微调",
    "type": "论文精读",
    "level": "进阶",
    "venue": "ICML",
    "venueGroup": "ICML",
    "paperYear": "2026",
    "paperName": "Heterogeneous Customizable Personalized Federated Fine-Tuning Approach for Large Language Models",
    "authors": "Xin Tong, Baojiang Cui",
    "cover": "assets/cover-712.png",
    "topics": [
      "fine-tuning",
      "data-heterogeneity"
    ],
    "topicLabels": [
      "个性化FL",
      "LoRA解耦",
      "SVD"
    ],
    "keywords": [
      "LoRA解耦",
      "个性化联邦学习",
      "SVD聚合",
      "OOD推理",
      "异构客户端"
    ],
    "summary": "BA=B_sA_s+B_pA_p列/行解耦→切分比例ρ自定义个性化强度→单适配器消除双适配器冲突→满秩展开+SVD压缩聚合→OOD困惑度动态加权→+13.09%个性化,+1.91%泛化。",
    "problem": "双适配器交替训练泛化/个性化目标冲突。不同客户端对个性化需求异构(医疗vs教育)。",
    "method": "LoRA矩阵列/行解耦+ρ比例控制+满秩展开W_s=B_sA_s+SVD压缩+OOD perplexity动态加权。",
    "takeaway": "LoRA解耦的第三种维度(column/row):与617(Tucker跨层)、710(rank级)构成完整矩阵。参数解耦先于目标解耦的策略。",
    "citation": "Tong, X. and Cui, B. Heterogeneous Customizable Personalized Federated Fine-Tuning Approach for Large Language Models. Proc. ICML, 2026.",
    "links": [
      {
        "label": "Code",
        "url": "https://github.com/tongxin-tx/Het-CPFLoRA"
      }
    ]
  }
];

const topicDefinitions = [
  {
    "id": "all",
    "label": "全部"
  },
  {
    "id": "intro",
    "label": "入门"
  },
  {
    "id": "lora",
    "label": "LoRA"
  },
  {
    "id": "lyapunov",
    "label": "Lyapunov"
  },
  {
    "id": "sfl",
    "label": "SFL"
  },
  {
    "id": "resource",
    "label": "资源优化"
  },
  {
    "id": "fine-tuning",
    "label": "联邦微调"
  },
  {
    "id": "generalization",
    "label": "泛化正则"
  },
  {
    "id": "rank",
    "label": "异构 Rank"
  },
  {
    "id": "multi-task",
    "label": "多任务 FL"
  },
  {
    "id": "reinforcement",
    "label": "强化学习"
  },
  {
    "id": "quantization",
    "label": "模型量化"
  },
  {
    "id": "data-heterogeneity",
    "label": "数据异构"
  }
];

const routes = [
  {
    "id": "starter",
    "title": "入门路线",
    "description": "先建立边缘大模型、LoRA 和 Lyapunov 的基本直觉。",
    "paperIds": [
      "512-edge-ai",
      "513-lora-edge",
      "514-lyapunov-intro",
      "610-llm-dt-lyapunov"
    ]
  },
  {
    "id": "lyapunov",
    "title": "Lyapunov 调度线",
    "description": "沿着长期时延、能耗和在线资源调度往下读。",
    "paperIds": [
      "514-lyapunov-intro",
      "515-fedft-bandwidth",
      "516-zo-fedft",
      "516-latency-energy",
      "517-streaming-energy",
      "518-semi-async-sfl",
      "63-freezing-power"
    ]
  },
  {
    "id": "lora",
    "title": "LoRA 微调线",
    "description": "从参数高效微调走到 experts、Dropout、量化底座和异构 rank。",
    "paperIds": [
      "513-lora-edge",
      "515-fedft-bandwidth",
      "516-zo-fedft",
      "519-fedlease",
      "521-fedlodrop",
      "522-roba-rank-bandwidth",
      "524-fah-qlora",
      "525-fedara",
      "527-flm-topk",
      "530-frlora",
      "531-fed-hello",
      "61-aircomp-lora-disaster"
    ]
  },
  {
    "id": "sfl",
    "title": "Split Learning 线",
    "description": "看模型切分、半异步协同和通信计算联合优化。",
    "paperIds": [
      "518-semi-async-sfl",
      "520-sfl-ga"
    ]
  },
  {
    "id": "resource",
    "title": "系统资源线",
    "description": "串起时延、能耗、rank、带宽、多任务资源配置与客户端选择。",
    "paperIds": [
      "512-edge-ai",
      "514-lyapunov-intro",
      "515-fedft-bandwidth",
      "516-zo-fedft",
      "516-latency-energy",
      "517-streaming-energy",
      "518-semi-async-sfl",
      "520-sfl-ga",
      "521-fedlodrop",
      "522-roba-rank-bandwidth",
      "523-jcsrc",
      "524-fah-qlora",
      "525-fedara",
      "526-kg-cs",
      "527-flm-topk",
      "528-perazzone-lyapunov",
      "529-offsite-tuning",
      "531-fed-hello",
      "61-aircomp-lora-disaster",
      "62-eh-quantization",
      "63-freezing-power",
      "64-sfl-imbalance",
      "65-zorba",
      "66-fedkrso",
      "67-aircomp-dp",
      "610-llm-dt-lyapunov",
      "611-split-ft",
      "614-cmab-stackelberg",
      "617-fedkd",
      "618-dybap",
      "619-coopllm-cache",
      "620-lyapunov-qmix",
      "626-aigc-stackelberg",
      "72-hybridflow",
      "710-smartfed",
      "712-hetcpflora"
    ]
  }
];
