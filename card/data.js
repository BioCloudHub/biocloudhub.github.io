/**
 * 角色定义
 */
export const roles = [
  { id: 'all', name: '全部资源', icon: '🎯' },
  { id: 'rd', name: '研发创新', icon: '🧪' },
  { id: 'quality', name: '质量合规', icon: '⚖️' },
  { id: 'clinical', name: '临床研究', icon: '🏥' },
  { id: 'production', name: '生产制造', icon: '🏭' },
  { id: 'reg', name: '注册申报', icon: '📝' },
  { id: 'it', name: '数字信息化', icon: '💻' },
  { id: 'market', name: '市场准入', icon: '📊' }
];

/**
 * 卡片数据
 */
export const cardData = [
  {
    logo: 'https://www.google.com/s2/favicons?domain=schrodinger.com&sz=128',
    brand: 'Schrödinger',
    name: '药物发现平台',
    description: '基于AI的药物分子设计和筛选工具，提供强大的计算化学平台，支持虚拟筛选、分子对接、ADMET预测等功能，帮助研究人员快速识别有前景的候选药物，显著加速新药研发流程，降低研发成本。',
    tags: ['AI', '药物发现', '研发工具'],
    url: 'https://www.schrodinger.com',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=medidata.com&sz=128',
    brand: 'Medidata',
    name: '临床试验管理系统',
    description: '全面管理临床试验数据，提供电子数据采集、随机化、药物编盲、受试者管理等完整功能，支持多中心协作和实时监控，确保数据质量和合规性，满足FDA、EMA等监管机构要求。',
    tags: ['临床试验', '数据管理', '协作'],
    url: 'https://www.medidata.com',
    roles: ['clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=siemens.com&sz=128',
    brand: 'Siemens',
    name: '智能制造平台',
    description: '智能化生产制造管理平台，集成MES、SCADA、ERP等系统，实现生产计划优化、设备监控、质量追溯、批次管理等功能，提升生产效率 and 产品质量，确保GMP合规。',
    tags: ['智能制造', '生产管理', '质量控制'],
    url: 'https://www.siemens.com/global/en/products/automation/industry-software.html',
    roles: ['production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=sas.com&sz=128',
    brand: 'SAS',
    name: '数据分析工具',
    description: '强大的数据分析 and 可视化工具，提供统计分析、数据挖掘、预测建模、报表生成等功能，支持多种统计分析方法，帮助研究人员从海量数据中提取有价值的信息，支持决策制定。',
    tags: ['数据分析', '可视化', '统计'],
    url: 'https://www.sas.com',
    roles: ['rd', 'clinical', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=vault.com&sz=128',
    brand: 'Veeva Vault',
    name: '监管合规助手',
    description: '自动化合规检查平台，提供法规跟踪、合规评估、文档管理、审计支持等功能，确保产品符合FDA、EMA、NMPA等各项监管要求，降低合规风险，提高审批通过率。',
    tags: ['合规', '监管', '自动化'],
    url: 'https://www.vault.com',
    roles: ['quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=pubmed.ncbi.nlm.nih.gov&sz=128',
    brand: 'PubMed',
    name: '知识库系统',
    description: '集中管理行业知识和文献资料，提供文献检索、知识分类、版本控制、协作分享等功能，构建企业知识体系，促进知识共享和创新，提升研发团队的工作效率 and 创新能力。',
    tags: ['知识管理', '文献', '协作'],
    url: 'https://www.pubmed.ncbi.nlm.nih.gov',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ibm.com&sz=128',
    brand: 'IBM',
    name: 'AI辅助诊断',
    description: '基于机器学习的医学影像诊断辅助系统，利用深度学习算法分析CT、MRI、X光等医学影像，提供病灶检测、疾病分类、预后评估等功能，辅助医生提高诊断准确性和效率。',
    tags: ['AI', '诊断', '医疗'],
    url: 'https://www.ibm.com/watson-health',
    roles: ['rd', 'clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=smartsheet.com&sz=128',
    brand: 'Smartsheet',
    name: '项目管理平台',
    description: '专业的研发项目管理工具，提供任务管理、进度跟踪、资源分配、风险管理、协作沟通等功能，支持敏捷、瀑布、混合等多种项目管理模式，帮助团队高效完成研发项目。',
    tags: ['项目管理', '协作', '研发工具'],
    url: 'https://www.smartsheet.com',
    roles: ['rd', 'production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=mastercontrol.com&sz=128',
    brand: 'MasterControl',
    name: '质量管理系统',
    description: '全面的质量控制和质量管理解决方案，涵盖CAPA、偏差管理、变更控制、审计管理、培训管理、文档管理等模块，确保产品质量和合规性，满足GMP、ISO等质量管理体系要求。',
    tags: ['质量管理', '质量控制', '合规'],
    url: 'https://www.mastercontrol.com',
    roles: ['quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=sap.com&sz=128',
    brand: 'SAP',
    name: '供应链管理',
    description: '优化供应链流程，提供供应商管理、采购管理、库存管理、物流跟踪、需求预测等功能，实现端到端的供应链可视化，降低库存成本，提高供应链响应速度和灵活性。',
    tags: ['供应链', '生产管理', '可视化'],
    url: 'https://www.sap.com/products/scm.html',
    roles: ['production', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=tableau.com&sz=128',
    brand: 'Tableau',
    name: '数据可视化平台',
    description: '强大的数据可视化工具，提供丰富的图表类型、交互式仪表板、实时数据更新、多维度分析等功能，支持多种数据源连接，帮助用户直观理解数据，发现业务洞察，支持数据驱动决策。',
    tags: ['可视化', '数据分析', '统计'],
    url: 'https://www.tableau.com',
    roles: ['rd', 'quality', 'production', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=testrail.com&sz=128',
    brand: 'TestRail',
    name: '自动化测试工具',
    description: '自动化测试框架，提供测试用例管理、测试执行、缺陷跟踪、测试报告等功能，支持多种测试类型 and 持续集成，提升测试效率和覆盖率，确保软件质量和稳定性。',
    tags: ['自动化', '测试', '研发工具'],
    url: 'https://www.testrail.com',
    roles: ['rd', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=illumina.com&sz=128',
    brand: 'Illumina',
    name: '生物信息学分析平台',
    description: '专业的基因组学、蛋白质组学数据分析平台，提供序列比对、变异检测、表达分析、功能注释、通路分析等功能，支持大规模数据处理和高性能计算，加速生物标志物发现和精准医疗研究。',
    tags: ['生物信息', '数据分析', '基因组学'],
    url: 'https://www.illumina.com',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ambermd.org&sz=128',
    brand: 'AMBER',
    name: '分子动力学模拟软件',
    description: '高精度分子动力学模拟工具，提供力场参数、模拟算法、轨迹分析等功能，用于药物-靶点相互作用研究、蛋白质折叠、膜蛋白模拟等，帮助理解分子机制，指导药物设计。',
    tags: ['药物发现', '模拟', '研发工具'],
    url: 'https://www.ambermd.org',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=viedoc.com&sz=128',
    brand: 'Viedoc',
    name: '电子数据采集系统',
    description: 'EDC系统，支持临床试验数据的在线采集、管理和质量控制，提供电子病例报告表、数据验证、查询管理、电子签名等功能，确保数据完整性、准确性和可追溯性，满足GCP要求。',
    tags: ['临床试验', '数据管理', '电子化'],
    url: 'https://www.viedoc.com',
    roles: ['clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=sharepoint.com&sz=128',
    brand: 'SharePoint',
    name: '文档管理系统',
    description: '集中管理研发文档，提供文档存储、版本控制、协作编辑、审批流程、权限管理、全文搜索等功能，确保文档安全性和可追溯性，提高团队协作效率，满足合规要求。',
    tags: ['文档管理', '协作', '版本控制'],
    url: 'https://www.sharepoint.com',
    roles: ['rd', 'quality', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=labware.com&sz=128',
    brand: 'LabWare',
    name: '实验室信息管理系统',
    description: 'LIMS系统，全面管理实验室流程、样本和数据，提供样本追踪、实验记录、仪器集成、数据管理、报告生成等功能，提高实验室工作效率，确保数据质量和可追溯性，满足GLP要求。',
    tags: ['实验室管理', '数据管理', '质量控制'],
    url: 'https://www.labware.com',
    roles: ['rd', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=riskmethods.net&sz=128',
    brand: 'RiskMethods',
    name: '风险评估工具',
    description: '系统化的风险评估和管理工具，提供风险识别、风险分析、风险评价、风险控制等功能，支持多维度分析和定量评估，帮助识别和管控质量风险、安全风险、合规风险等，降低风险影响。',
    tags: ['风险管理', '合规', '分析工具'],
    url: 'https://www.riskmethods.net',
    roles: ['quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=endnote.com&sz=128',
    brand: 'EndNote',
    name: '文献检索与管理系统',
    description: '智能文献检索、管理和引用工具，提供文献搜索、文献库管理、引用格式、笔记标注、协作分享等功能，支持多种数据库和引用格式，提升科研效率，帮助研究人员更好地管理和利用文献资源。',
    tags: ['文献', '知识管理', '检索'],
    url: 'https://www.endnote.com',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=certara.com&sz=128',
    brand: 'Certara',
    name: '药代动力学分析软件',
    description: 'PK/PD数据分析软件，提供药代动力学建模、药效学建模、群体药代动力学分析、模型验证等功能，支持模型建立 and 参数估算，帮助优化给药方案，指导临床试验设计和药物开发决策。',
    tags: ['数据分析', '药代动力学', '统计'],
    url: 'https://www.certara.com/software/phoenix',
    roles: ['clinical', 'rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=oracle.com&sz=128',
    brand: 'Oracle',
    name: '不良反应监测系统',
    description: '药物不良反应监测和报告系统，提供不良事件收集、因果关系评估、报告生成、信号检测、风险评估等功能，确保用药安全，满足药物警戒要求，支持向监管机构提交安全性报告。',
    tags: ['安全监测', '医疗', '数据管理'],
    url: 'https://www.oracle.com/industries/life-sciences/safety',
    roles: ['clinical', 'quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=thermofisher.com&sz=128',
    brand: 'Thermo Fisher Scientific',
    name: '细胞培养管理系统',
    description: '智能细胞培养管理，提供培养计划、细胞传代记录、污染检测、库存管理、质量控制等功能，追踪培养历史和细胞状态，确保细胞质量和实验可重复性，提高细胞培养效率。',
    tags: ['实验室管理', '细胞培养', '生产管理'],
    url: 'https://www.thermofisher.com/us/en/home/life-science/cell-culture.html',
    roles: ['rd', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=werum.com&sz=128',
    brand: 'Werum',
    name: '批次记录管理系统',
    description: '电子化批次记录管理，提供批次记录模板、数据采集、电子签名、审批流程、追溯查询等功能，实现生产全过程可追溯，确保数据完整性和真实性，满足GMP要求，提高生产效率。',
    tags: ['生产管理', '质量管理', '电子化'],
    url: 'https://www.werum.com',
    roles: ['production', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=rockwellautomation.com&sz=128',
    brand: 'Rockwell Automation',
    name: '配方管理系统',
    description: '集中管理产品配方，提供配方设计、版本控制、变更管理、审批流程、BOM管理等功能，确保配方准确性和可追溯性，支持配方优化和成本分析，提高产品开发效率。',
    tags: ['生产管理', '配方管理', '版本控制'],
    url: 'https://www.rockwellautomation.com',
    roles: ['production', 'rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=oracle.com&sz=128',
    brand: 'Oracle',
    name: '库存管理系统',
    description: '智能库存管理，提供库存监控、需求预测、补货计划、ABC分析、库存周转分析等功能，优化库存水平，降低库存成本，避免缺货和积压，提高供应链效率。',
    tags: ['供应链', '库存管理', '生产管理'],
    url: 'https://www.oracle.com/applications/supply-chain-management',
    roles: ['production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ibm.com&sz=128',
    brand: 'IBM',
    name: '设备维护管理系统',
    description: '预防性维护管理，提供维护计划、工单管理、备件管理、设备档案、维护历史等功能，确保设备正常运行和合规性，延长设备寿命，降低故障率，提高设备利用率和生产效率。',
    tags: ['设备管理', '维护', '合规'],
    url: 'https://www.ibm.com/products/maximo',
    roles: ['production', 'quality', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=talentlms.com&sz=128',
    brand: 'TalentLMS',
    name: '培训管理系统',
    description: '员工培训管理和认证系统，提供培训计划、课程管理、在线学习、考试认证、培训记录等功能，确保合规培训完成，提高员工技能和合规意识，满足GMP培训要求，支持培训效果评估。',
    tags: ['培训管理', '合规', '协作'],
    url: 'https://www.talentlms.com',
    roles: ['quality', 'production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=auditboard.com&sz=128',
    brand: 'AuditBoard',
    name: '审计管理系统',
    description: '内部审计和外部审计管理，提供审计计划、检查清单、审计执行、发现跟踪、整改管理、审计报告等功能，跟踪审计发现和整改，确保问题及时解决，提高质量管理水平，满足监管要求。',
    tags: ['审计', '合规', '质量管理'],
    url: 'https://www.auditboard.com',
    roles: ['quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=servicenow.com&sz=128',
    brand: 'ServiceNow',
    name: '变更控制系统',
    description: '变更请求、评估、批准和实施的全流程管理，提供变更申请、影响评估、风险评估、审批流程、实施跟踪、效果评估等功能，确保变更受控，降低变更风险，提高变更管理效率。',
    tags: ['变更管理', '合规', '版本控制'],
    url: 'https://www.servicenow.com/products/it-business-management.html',
    roles: ['quality', 'production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=assurx.com&sz=128',
    brand: 'AssurX',
    name: 'CAPA管理系统',
    description: '纠正和预防措施管理，提供问题识别、根本原因分析、纠正措施制定、预防措施制定、措施跟踪、效果验证等功能，确保问题得到有效解决，防止问题再次发生，持续改进质量管理体系。',
    tags: ['CAPA', '质量管理', '合规'],
    url: 'https://www.assurx.com',
    roles: ['quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=valgenesis.com&sz=128',
    brand: 'ValGenesis',
    name: '验证管理系统',
    description: '设备、工艺和软件验证管理，提供验证计划、验证方案、验证执行、数据管理、验证报告等功能，确保符合验证要求，满足GMP、GAMP等验证标准，保证系统可靠性和合规性。',
    tags: ['验证', '合规', '质量管理'],
    url: 'https://www.valgenesis.com',
    roles: ['quality', 'production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=spartasystems.com&sz=128',
    brand: 'Sparta Systems',
    name: '偏差管理系统',
    description: '偏差报告、调查和处理流程管理，提供偏差报告、根本原因分析、影响评估、纠正措施、CAPA关联、偏差关闭等功能，确保偏差得到及时处理和有效控制，防止偏差再次发生，提高质量管理水平。',
    tags: ['偏差管理', '质量管理', '合规'],
    url: 'https://www.spartasystems.com',
    roles: ['quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=coupa.com&sz=128',
    brand: 'Coupa',
    name: '供应商管理系统',
    description: '供应商资质管理、评估和审核系统，提供供应商档案、资质管理、评估审核、绩效监控、风险评级等功能，确保供应商质量，降低供应链风险，提高采购质量 and 效率，满足GMP供应商管理要求。',
    tags: ['供应商管理', '供应链', '质量管理'],
    url: 'https://www.coupa.com',
    roles: ['quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=arxspan.com&sz=128',
    brand: 'Arxspan',
    name: '监管报告生成工具',
    description: '自动化生成监管报告，提供报告模板、数据提取、报告生成、格式转换、电子提交等功能，支持FDA、EMA、NMPA等监管机构报告格式，提高报告质量和效率，确保及时提交，满足监管要求。',
    tags: ['报告', '自动化', '合规'],
    url: 'https://www.arxspan.com',
    roles: ['quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=kissflow.com&sz=128',
    brand: 'Kissflow',
    name: '制药工作流自动化平台',
    description: '可视化工作流设计，自动化制药业务流程和审批流程，提供流程建模、流程执行、任务分配、审批管理、流程监控等功能，提高流程效率，减少人工错误，确保流程标准化和合规性。',
    tags: ['自动化', '工作流', '合规'],
    url: 'https://www.kissflow.com',
    roles: ['quality', 'production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=mulesoft.com&sz=128',
    brand: 'MuleSoft',
    name: '系统集成平台',
    description: '制药系统间API集成和数据交换，提供系统连接、数据映射、数据转换、数据同步、接口管理等功能，实现数据互通，消除信息孤岛，提高数据一致性和系统集成效率，支持数字化转型。',
    tags: ['集成', 'API', '数据管理'],
    url: 'https://www.mulesoft.com',
    roles: ['production', 'rd', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=appian.com&sz=128',
    brand: 'Appian',
    name: '移动端制药应用',
    description: '移动设备访问制药系统，提供移动端应用、离线操作、数据同步、现场数据采集、移动审批、实时通知等功能，支持现场数据采集和审批，提高工作效率，支持移动办公和远程协作. ',
    tags: ['移动端', '数据采集', '审批流程'],
    url: 'https://www.appian.com',
    roles: ['production', 'quality', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=aveva.com&sz=128',
    brand: 'AVEVA',
    name: '生产实时监控系统',
    description: '实时监控生产关键指标，提供数据采集、实时监控、趋势分析、异常检测、自动预警、报表生成等功能，异常情况自动预警，帮助及时发现和解决问题，确保生产稳定性和产品质量。',
    tags: ['监控', '预警', '生产管理'],
    url: 'https://www.aveva.com',
    roles: ['production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=compliancequest.com&sz=128',
    brand: 'ComplianceQuest',
    name: '合规检查清单工具',
    description: '自动化合规检查清单，提供检查清单管理、自动检查、问题记录、整改跟踪、合规报告等功能，确保符合GMP、FDA、EMA等法规要求，提高合规检查效率，降低合规风险。',
    tags: ['合规', '检查清单', '监管'],
    url: 'https://www.compliancequest.com',
    roles: ['quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ibm.com&sz=128',
    brand: 'IBM',
    name: '药品溯源平台',
    description: '基于区块链的药品溯源，提供药品标识、流通记录、防伪验证、追溯查询等功能，确保药品全链条可追溯，防止假药流通，提高药品安全性，满足监管要求，保护患者用药安全。',
    tags: ['区块链', '溯源', '供应链'],
    url: 'https://www.ibm.com/blockchain',
    roles: ['production', 'quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=docusign.com&sz=128',
    brand: 'DocuSign',
    name: '电子签名与审批系统',
    description: '电子签名和审批流程，提供电子签名、审批流程、权限管理、审计追踪等功能，支持GMP文档审批，确保文档真实性和完整性，提高审批效率，满足21 CFR Part 11等电子记录要求。',
    tags: ['电子签名', '审批流程', '合规'],
    url: 'https://www.docusign.com',
    roles: ['quality', 'rd', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=labster.com&sz=128',
    brand: 'Labster',
    name: '虚拟实验室平台',
    description: '在线虚拟实验室，提供虚拟实验环境、实验模拟、操作培训、实验评估等功能，支持远程实验操作和培训，降低实验成本，提高培训效果，支持大规模实验教学和技能培训。',
    tags: ['虚拟实验室', '培训', '实验室管理'],
    url: 'https://www.labster.com',
    roles: ['rd', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=collibra.com&sz=128',
    brand: 'Collibra',
    name: '制药数据治理平台',
    description: '制药数据质量管理、元数据管理和数据标准化，提供数据质量评估、数据清洗、元数据管理、数据标准制定、数据治理策略等功能，确保数据质量和一致性，支持数据驱动决策和数字化转型。',
    tags: ['数据治理', '数据管理', '质量控制'],
    url: 'https://www.collibra.com',
    roles: ['quality', 'production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=predix.io&sz=128',
    brand: 'Predix',
    name: '生产设备物联网管理',
    description: '生产设备IoT连接、监控和管理，提供设备连接、数据采集、实时监控、预测性维护、设备优化等功能，实现设备智能化，提高设备利用率 and 生产效率，降低维护成本，支持智能制造。',
    tags: ['物联网', '设备管理', '生产管理'],
    url: 'https://www.predix.io',
    roles: ['production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=benevolent.ai&sz=128',
    brand: 'Benevolent AI',
    name: '药物研发AI平台',
    description: '机器学习模型训练和部署，提供数据预处理、特征工程、模型训练、模型评估、模型部署、模型监控等功能，应用于药物发现和优化，加速新药研发，提高研发成功率和效率。',
    tags: ['AI', '机器学习', '药物发现'],
    url: 'https://www.benevolent.ai',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=semanticscholar.org&sz=128',
    brand: 'Semantic Scholar',
    name: '文献智能分析工具',
    description: '自然语言处理分析科研文献，提供文本挖掘、信息提取、实体识别、关系抽取、知识图谱构建等功能，提取关键信息和关联，帮助研究人员快速理解文献内容，发现研究趋势 and 知识关联。',
    tags: ['AI', '自然语言处理', '文献'],
    url: 'https://www.semanticscholar.org',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=nvidia.com&sz=128',
    brand: 'NVIDIA',
    name: '医学影像AI诊断',
    description: '医学影像识别和分析，提供图像处理、特征提取、病灶检测、疾病分类、定量分析等功能，辅助药物研发和临床诊断，提高诊断准确性和效率，支持精准医疗和个性化治疗。',
    tags: ['AI', '图像识别', '医疗'],
    url: 'https://www.nvidia.com/en-us/healthcare',
    roles: ['rd', 'clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=quintiles.com&sz=128',
    brand: 'Quintiles',
    name: '临床试验预测分析',
    description: '基于历史数据的临床试验成功率预测和风险分析，提供数据挖掘、预测建模、风险评估、决策支持等功能，帮助优化临床试验设计，降低试验风险，提高试验成功率，优化资源配置。',
    tags: ['预测分析', '数据分析', '临床试验'],
    url: 'https://www.quintiles.com',
    roles: ['clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
    brand: 'Microsoft Power BI',
    name: '制药商业智能 system',
    description: '制药数据仓库、ETL和BI报表，提供数据集成、数据存储、数据转换、多维分析、报表生成、仪表板等功能，支持研发和生产分析，帮助发现业务洞察，支持数据驱动决策和业务优化。',
    tags: ['商业智能', '数据分析', '可视化'],
    url: 'https://www.microsoft.com/power-bi',
    roles: ['rd', 'production', 'quality', 'market', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=knime.com&sz=128',
    brand: 'KNIME',
    name: '生物数据挖掘工具',
    description: '大规模生物医药数据挖掘和模式识别，提供数据预处理、特征选择、聚类分析、关联规则、分类预测等功能，从海量数据中发现隐藏模式和规律，支持生物标志物发现、药物重定位等研究。',
    tags: ['数据挖掘', '数据分析', '生物信息'],
    url: 'https://www.knime.com',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=palantir.com&sz=128',
    brand: 'Palantir',
    name: '研发知识图谱平台',
    description: '药物研发知识图谱构建和可视化，提供实体抽取、关系抽取、图谱构建、图谱查询、可视化展示等功能，发现知识关联，帮助理解复杂的生物医学关系，支持药物发现 and 研发决策。',
    tags: ['知识管理', '知识图谱', '药物发现'],
    url: 'https://www.palantir.com',
    roles: ['rd', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=complianceonline.com&sz=128',
    brand: 'ComplianceOnline',
    name: '合规培训平台',
    description: 'GMP、GCP等合规培训课程、考试和认证管理，提供在线课程、培训计划、考试系统、证书管理、培训记录等功能，确保员工掌握合规知识，提高合规意识，满足监管培训要求。',
    tags: ['培训管理', '合规', '知识管理'],
    url: 'https://www.complianceonline.com',
    roles: ['quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=exscientia.ai&sz=128',
    brand: 'Exscientia',
    name: '药物研发专家系统',
    description: '基于规则的药物研发专家系统，提供知识库管理、规则引擎、推理机制、建议生成等功能，整合专家知识和经验，提供专业建议，支持药物研发决策，提高研发效率和成功率。',
    tags: ['AI', '专家系统', '药物发现'],
    url: 'https://www.exscientia.ai',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=qlik.com&sz=128',
    brand: 'Qlik',
    name: '研发决策支持系统',
    description: '数据驱动的研发决策支持工具，提供数据分析、预测建模、场景模拟、决策树、敏感性分析等功能，辅助研发管理决策，优化资源配置，降低决策风险，提高研发投资回报率. ',
    tags: ['决策支持', '数据分析', '研发工具'],
    url: 'https://www.qlik.com',
    roles: ['rd', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=drugbank.ca&sz=128',
    brand: 'DrugBank',
    name: '药物相互作用数据库',
    description: '全面的药物相互作用数据库，提供药物信息、相互作用数据、代谢途径、不良反应、药物靶点等功能，支持药物安全性评估，帮助临床医生 and 研究人员了解药物相互作用，确保用药安全。',
    tags: ['数据库', '药物安全', '数据分析'],
    url: 'https://www.drugbank.ca',
    roles: ['clinical', 'rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ncss.com&sz=128',
    brand: 'NCSS',
    name: '临床试验方案设计工具',
    description: '临床试验方案设计、优化和统计分析计划制定，提供方案模板、样本量计算、随机化设计、统计分析计划、方案优化等功能，帮助设计科学合理的临床试验方案，提高试验质量和成功率。',
    tags: ['临床试验', '方案设计', '统计'],
    url: 'https://www.ncss.com',
    roles: ['clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=instron.com&sz=128',
    brand: 'Instron',
    name: '药物稳定性研究系统',
    description: '药物稳定性数据管理和分析，提供稳定性研究计划、数据采集、统计分析、有效期预测、报告生成等功能，支持ICH指导原则，确保药物稳定性数据的准确性和完整性，指导产品储存和有效期确定。',
    tags: ['稳定性研究', '数据分析', '质量管理'],
    url: 'https://www.instron.com',
    roles: ['quality', 'rd', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=agilent.com&sz=128',
    brand: 'Agilent',
    name: '原料药管理系统',
    description: '原料药信息管理、供应商评估和质量追溯，提供原料药档案、供应商管理、质量评估、追溯查询、风险评估等功能，确保原料药质量和可追溯性，降低供应链风险，满足GMP要求。',
    tags: ['原料药', '供应商管理', '质量管理'],
    url: 'https://www.agilent.com',
    roles: ['production', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=westpharma.com&sz=128',
    brand: 'West Pharmaceutical Services',
    name: '包装材料管理系统',
    description: '药品包装材料信息管理和相容性研究数据管理，提供包装材料档案、相容性研究、迁移试验、稳定性研究、风险评估等功能，确保包装材料安全性和适用性，满足监管要求，保护药品质量。',
    tags: ['包装材料', '质量管理', '数据管理'],
    url: 'https://www.westpharma.com',
    roles: ['quality', 'production', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=particlemeasuringsystems.com&sz=128',
    brand: 'Particle Measuring Systems',
    name: '环境监测系统',
    description: '洁净室环境监测数据采集、分析和报警管理，提供温湿度、压差、粒子计数、微生物等环境参数监测，实时数据采集、趋势分析、超标报警、报告生成等功能，确保洁净室环境符合GMP要求。',
    tags: ['环境监测', '质量控制', '监控'],
    url: 'https://www.particlemeasuringsystems.com',
    roles: ['quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=veolia.com&sz=128',
    brand: 'Veolia',
    name: '水系统管理系统',
    description: '制药用水系统监测、验证和维护管理，提供水质监测、系统验证、维护计划、记录管理、趋势分析等功能，确保制药用水质量符合药典要求，满足GMP要求，保证产品质量。',
    tags: ['水系统', '验证', '质量管理'],
    url: 'https://www.veolia.com',
    roles: ['production', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=merckmillipore.com&sz=128',
    brand: 'Merck Millipore',
    name: '清洁验证管理系统',
    description: '设备清洁验证方案、执行和数据分析管理，提供验证方案制定、取样计划、分析方法、数据采集、结果分析、报告生成等功能，确保设备清洁效果，防止交叉污染，满足GMP要求。',
    tags: ['清洁验证', '验证', '质量管理'],
    url: 'https://www.merckmillipore.com',
    roles: ['quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ge.com&sz=128',
    brand: 'GE Digital',
    name: '工艺验证管理系统',
    description: '工艺验证方案制定、执行和数据分析，提供验证方案、验证执行、数据采集、统计分析、验证报告等功能，确保生产工艺的稳定性和重现性，证明工艺能够持续生产出符合质量要求的产品。',
    tags: ['工艺验证', '验证', '生产管理'],
    url: 'https://www.ge.com/digital',
    roles: ['production', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=waters.com&sz=128',
    brand: 'Waters',
    name: '分析方法验证系统',
    description: '分析方法验证方案、执行和数据分析管理，提供验证方案、验证执行、数据采集、统计分析、验证报告等功能，确保分析方法的准确性、精密度、专属性等性能指标，满足药典和监管要求。',
    tags: ['方法验证', '验证', '质量控制'],
    url: 'https://www.waters.com',
    roles: ['rd', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=sigmaaldrich.com&sz=128',
    brand: 'Sigma-Aldrich',
    name: '标准品管理系统',
    description: '标准品信息管理、有效期跟踪和库存管理，提供标准品档案、有效期监控、库存预警、使用记录、追溯查询等功能，确保标准品质量和可用性，防止使用过期标准品，保证检验准确性。',
    tags: ['标准品', '实验室管理', '库存管理'],
    url: 'https://www.sigmaaldrich.com',
    roles: ['rd', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=fishersci.com&sz=128',
    brand: 'Fisher Scientific',
    name: '试剂管理系统',
    description: '试剂信息管理、有效期跟踪和库存管理，提供试剂档案、有效期监控、库存预警、使用记录、供应商管理等功能，确保试剂质量和可用性，优化库存管理，降低试剂成本，保证实验质量。',
    tags: ['试剂管理', '实验室管理', '库存管理'],
    url: 'https://www.fishersci.com',
    roles: ['rd', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=brooks.com&sz=128',
    brand: 'Brooks',
    name: '样品管理系统',
    description: '样品接收、存储、分发和销毁全流程管理，提供样品登记、存储管理、分发记录、销毁管理、追溯查询等功能，确保样品完整性和可追溯性，满足GLP要求，支持实验室样品管理。',
    tags: ['样品管理', '实验室管理', '数据管理'],
    url: 'https://www.brooks.com',
    roles: ['rd', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=labvantage.com&sz=128',
    brand: 'LabVantage',
    name: '检验记录管理系统',
    description: '检验记录电子化管理，提供检验记录模板、数据录入、电子签名、审批流程、记录查询等功能，支持电子签名和审批，确保记录真实性和完整性，提高检验效率，满足GMP要求。',
    tags: ['检验记录', '电子化', '质量管理'],
    url: 'https://www.labvantage.com',
    roles: ['quality', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ptc.com&sz=128',
    brand: 'PTC',
    name: '放行管理系统',
    description: '产品放行流程管理，提供放行检查清单、质量审核、放行审批、放行记录等功能，确保符合放行标准，只有符合质量要求的产品才能放行，保证产品质量和患者安全，满足GMP要求。',
    tags: ['放行管理', '质量管理', '审批流程'],
    url: 'https://www.ptc.com',
    roles: ['quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=zendesk.com&sz=128',
    brand: 'Zendesk',
    name: '投诉管理系统',
    description: '产品投诉接收、调查和处理流程管理，提供投诉登记、调查执行、根本原因分析、纠正措施、投诉关闭、趋势分析等功能，确保投诉得到及时有效处理，持续改进产品质量，满足监管要求. ',
    tags: ['投诉管理', '质量管理', '合规'],
    url: 'https://www.zendesk.com',
    roles: ['quality', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=fda.gov&sz=128',
    brand: 'FDA',
    name: '召回管理系统',
    description: '产品召回流程管理，提供召回决策、召回计划、召回执行、召回跟踪、召回报告等功能，确保快速响应和合规处理，及时召回有质量问题的产品，保护患者安全，满足监管要求。',
    tags: ['召回管理', '质量管理', '合规'],
    url: 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts',
    roles: ['quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=velteris.com&sz=128',
    brand: 'Velteris',
    name: '稳定性考察管理系统',
    description: '稳定性考察计划、执行和数据分析管理，提供考察计划、样品管理、数据采集、统计分析、有效期预测、报告生成等功能，评估产品在储存条件下的稳定性，指导产品储存条件和有效期确定。',
    tags: ['稳定性考察', '质量管理', '数据分析'],
    url: 'https://www.velteris.com',
    roles: ['quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=thermofisher.com&sz=128',
    brand: 'Thermo Fisher Scientific',
    name: '留样管理系统',
    description: '产品留样信息管理和留样到期提醒，提供留样登记、存储管理、到期提醒、留样检验、留样销毁等功能，确保留样完整性和可追溯性，支持质量追溯和问题调查，满足GMP留样要求。',
    tags: ['留样管理', '质量管理', '库存管理'],
    url: 'https://www.thermofisher.com',
    roles: ['quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=flukecal.com&sz=128',
    brand: 'Fluke Calibration',
    name: '计量器具管理系统',
    description: '计量器具信息管理、校准计划和证书管理，提供器具档案、校准计划、校准执行、证书管理、到期提醒等功能，确保计量器具准确性和可追溯性，满足GMP计量管理要求，保证检验准确性。',
    tags: ['计量器具', '设备管理', '验证'],
    url: 'https://www.flukecal.com',
    roles: ['quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=deltatrak.com&sz=128',
    brand: 'DeltaTrak',
    name: '温湿度监控系统',
    description: '仓库和实验室温湿度实时监控和报警，提供实时监测、数据记录、趋势分析、超标报警、报表生成等功能，确保储存环境符合要求，保护产品质量，满足GMP环境控制要求。',
    tags: ['温湿度监控', '监控', '质量控制'],
    url: 'https://www.deltatrak.com',
    roles: ['quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=sensitech.com&sz=128',
    brand: 'Sensitech',
    name: '冷链管理系统',
    description: '冷链运输和存储温度监控，提供温度监测、GPS定位、实时报警、数据记录、追溯查询等功能，确保药品在运输和储存过程中温度符合要求，保证药品质量 and 有效性，满足冷链管理要求。',
    tags: ['冷链管理', '监控', '供应链'],
    url: 'https://www.sensitech.com',
    roles: ['production', 'quality', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=antidote.me&sz=128',
    brand: 'Antidote',
    name: '临床试验受试者管理系统',
    description: '受试者招募、筛选、入组和随访管理，提供受试者档案、招募管理、筛选评估、知情同意、入组管理、随访计划、数据收集等功能，确保受试者管理规范，保护受试者权益，满足GCP要求。',
    tags: ['临床试验', '受试者管理', '数据管理'],
    url: 'https://www.antidote.me',
    roles: ['clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=perceptive.com&sz=128',
    brand: 'Perceptive',
    name: '随机化系统',
    description: '临床试验随机化和药物编盲管理，提供随机化方案、随机化执行、药物编盲、揭盲管理、应急揭盲等功能，确保试验的科学性和客观性，防止选择偏倚，满足GCP随机化要求。',
    tags: ['临床试验', '随机化', '数据管理'],
    url: 'https://www.perceptive.com',
    roles: ['clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=oracle.com&sz=128',
    brand: 'Oracle',
    name: '药物警戒系统',
    description: '药物不良反应监测、报告和风险评估，提供不良事件收集、因果关系评估、严重性评估、报告生成、信号检测、风险评估等功能，确保药物安全性监测，及时识别和评估安全风险，满足药物警戒要求。',
    tags: ['药物警戒', '安全监测', '合规'],
    url: 'https://www.oracle.com/industries/life-sciences/safety',
    roles: ['clinical', 'quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=regulatoryaffairs.org&sz=128',
    brand: 'RAPS',
    name: '注册申报管理系统',
    description: '药品注册申报资料管理和申报进度跟踪，提供资料管理、版本控制、资料审核、申报提交、进度跟踪、沟通记录等功能，确保申报资料完整性和准确性，提高申报效率，支持注册申报成功。',
    tags: ['注册申报', '监管', '文档管理'],
    url: 'https://www.regulatoryaffairs.org',
    roles: ['quality', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=fda.gov&sz=128',
    brand: 'FDA',
    name: '监管沟通管理系统',
    description: '与监管机构沟通记录和跟踪管理，提供沟通计划、会议记录、邮件管理、问题跟踪、回复管理、沟通历史等功能，确保与监管机构的有效沟通，及时响应监管要求，支持注册申报和合规管理。',
    tags: ['监管沟通', '监管', '文档管理'],
    url: 'https://www.fda.gov',
    roles: ['quality', 'reg']
  }
  ,
  {
    logo: 'https://www.google.com/s2/favicons?domain=slidesgo.com&sz=128',
    brand: 'Slidesgo',
    name: 'PPT模板资源',
    description: '丰富的专业PPT模板库，适用于学术、商业、医疗、生物制药等多场景，支持免费下载和在线编辑，提升汇报与展示效率。',
    tags: ['PPT', '模板', '演示'],
    url: 'https://www.slidesgo.com',
    roles: ['rd', 'quality', 'clinical', 'production', 'market', 'reg', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=iconfont.cn&sz=128',
    brand: 'Iconfont',
    name: '矢量图标库',
    description: '阿里巴巴开源矢量图标库，涵盖各类主题与行业，支持SVG、PNG等格式下载，助力UI设计和PPT美化。',
    tags: ['图标', '设计', '素材'],
    url: 'https://www.iconfont.cn',
    roles: ['rd', 'quality', 'clinical', 'production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=iconmonstr.com&sz=128',
    brand: 'Iconmonstr',
    name: '免费黑白图标库',
    description: '简洁风格的免费黑白Icon合集，无版权限制，可用于学术展示、网页与项目美化。',
    tags: ['图标', '免费', '设计工具'],
    url: 'https://iconmonstr.com',
    roles: ['rd', 'quality', 'clinical', 'production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=processon.com&sz=128',
    brand: 'ProcessOn',
    name: '在线流程图与思维导图工具',
    description: '提供在线流程图、思维导图、组织结构图等绘制工具，便于团队协作，支持多种模板及导出格式。',
    tags: ['在线工具', '流程图', '思维导图'],
    url: 'https://www.processon.com',
    roles: ['rd', 'quality', 'clinical', 'production', 'it', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=cnki.net&sz=128',
    brand: '中国知网',
    name: '学术论文查找平台',
    description: '中国领先的学术论文数据库，涵盖医药、生物制药、工程等各大领域，支持论文检索、下载与引用管理。',
    tags: ['论文查找', '学术', '数据库'],
    url: 'https://www.cnki.net',
    roles: ['rd', 'clinical', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=scholar.google.com&sz=128',
    brand: 'Google Scholar',
    name: '全球学术论文搜索',
    description: '全面覆盖全球学术论文、专利、书籍等，支持英文与中英文关键词检索，是学术研究人员必备工具。',
    tags: ['论文查找', '学术', '搜索引擎'],
    url: 'https://scholar.google.com',
    roles: ['rd', 'clinical', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=libgen.is&sz=128',
    brand: 'Library Genesis',
    name: '论文与书籍免费下载',
    description: '全球知名免费论文书籍下载平台，收录科学、医学、技术、社科等领域的海量资源，供科研学习使用。',
    tags: ['论文下载', '电子书', '科研工具'],
    url: 'https://libgen.is',
    roles: ['rd', 'clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=pharmnet.com.cn&sz=128',
    brand: '中国医药网',
    name: '生物制药法规与资讯',
    description: '涵盖中国药监局、FDA、EMA等各类药品监管法规，资讯动态、政策解读及制药行业研讨资料。',
    tags: ['法规', '医药资讯', '政策'],
    url: 'https://www.pharmnet.com.cn',
    roles: ['quality', 'rd', 'clinical', 'reg', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ema.europa.eu&sz=128',
    brand: '欧洲药品管理局EMA',
    name: '欧盟药品法规及注册指南',
    description: '提供药物注册、药物警戒、合规指南、法规动态、公共评估报告等权威资源。',
    tags: ['法规', 'EMA', '生物制药'],
    url: 'https://www.ema.europa.eu',
    roles: ['quality', 'rd', 'clinical', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ncbi.nlm.nih.gov&sz=128',
    brand: 'NCBI',
    name: '生物数据库与工具',
    description: '美国国立生物技术信息中心，提供BLAST、PubChem、Gene、GenBank等生物信息学数据库及工具。',
    tags: ['生物信息', '数据库', '生物工具'],
    url: 'https://www.ncbi.nlm.nih.gov',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=uniprot.org&sz=128',
    brand: 'UniProt',
    name: '蛋白质知识库',
    description: '全球蛋白质序列、功能及注释数据库，支持序列搜索、批量下载，适合药物靶点筛选与生信分析。',
    tags: ['蛋白质', '数据库', '生物制药'],
    url: 'https://www.uniprot.org',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=expasy.org&sz=128',
    brand: 'ExPASy',
    name: '生物信息分析工具集',
    description: '提供蛋白序列分析、结构功能预测、生物工具与文献检索资源，广泛服务于生物制药领域研究。',
    tags: ['生物工具', '数据分析', '结构预测'],
    url: 'https://www.expasy.org',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=pubchem.ncbi.nlm.nih.gov&sz=128',
    brand: 'PubChem',
    name: '化合物公开数据库',
    description: '提供分子结构、性质、活性、文献等综合化学信息，适用于新药靶点筛选和药理研究。',
    tags: ['化学数据库', '药物发现', '科研'],
    url: 'https://pubchem.ncbi.nlm.nih.gov',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=addgene.org&sz=128',
    brand: 'Addgene',
    name: '质粒资源共享平台',
    description: '提供全球科学家分享的生物质粒，涵盖广泛的基因编辑、慢病毒、CRISPR等载体，适用于生命科学和生物制药研究。',
    tags: ['质粒', '资源', '生物制药'],
    url: 'https://www.addgene.org',
    roles: ['rd']
  },
  // 新增 IT/数字化 资源
  {
    logo: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128',
    brand: 'AWS Healthcare',
    name: '生命科学云平台',
    description: '提供合规的云端存储、计算和 AI 服务，支持 GxP 环境，加速生物医药数据的分析与存储。',
    tags: ['云计算', '合规', '大数据'],
    url: 'https://aws.amazon.com/health/',
    roles: ['it', 'rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=notion.so&sz=128',
    brand: 'Notion',
    name: '多功能工作空间',
    description: '集笔记、文档、项目管理和知识库于一体的协作工具，适合构建团队 SOP 和资源中心。',
    tags: ['知识管理', '协作', '文档'],
    url: 'https://www.notion.so',
    roles: ['it', 'rd', 'quality', 'market', 'reg']
  },
  // 新增 市场准入/准入 资源
  {
    logo: 'https://www.google.com/s2/favicons?domain=iqvia.com&sz=128',
    brand: 'IQVIA',
    name: '医药市场数据分析',
    description: '提供全球医药市场趋势、销售数据、处方分析及市场准入决策支持。',
    tags: ['市场数据', '咨询', '决策支持'],
    url: 'https://www.iqvia.com',
    roles: ['market', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=clinicaltrials.gov&sz=128',
    brand: 'ClinicalTrials.gov',
    name: '全球临床试验登记库',
    description: '美国 NIH 运营的全球最大临床试验数据库，可查询全球竞品的临床进展与方案。',
    tags: ['竞品分析', '临床进展', '数据库'],
    url: 'https://clinicaltrials.gov',
    roles: ['market', 'clinical', 'reg']
  },
  // 新增 注册申报 资源
  {
    logo: 'https://www.google.com/s2/favicons?domain=nmpa.gov.cn&sz=128',
    brand: 'NMPA',
    name: '中国国家药监局',
    description: '官方监管机构，提供药品注册申请指南、法规颁布、审评审批进度查询。',
    tags: ['监管', '指南', '官方'],
    url: 'https://www.nmpa.gov.cn',
    roles: ['reg', 'quality']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=cde.org.cn&sz=128',
    brand: 'CDE',
    name: '药审中心',
    description: 'NMPA 药品审评中心，发布审评指导原则、受理公示、仿制药参比制剂等。',
    tags: ['审评', '指导原则', '参比制剂'],
    url: 'https://www.cde.org.cn',
    roles: ['reg', 'rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=clarivate.com&sz=128',
    brand: 'Cortellis',
    name: '医药情报与监管数据库',
    description: 'Clarivate 旗下的权威医药情报平台，涵盖新药研发管线、专利信息、交易数据及全球监管动态。',
    tags: ['医药情报', '专利', '准入分析'],
    url: 'https://clarivate.com/products/biopharma/cortellis/',
    roles: ['market', 'reg', 'rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=deepmind.com&sz=128',
    brand: 'AlphaFold DB',
    name: '蛋白质结构预测数据库',
    description: '由 Google DeepMind 提供的开源蛋白质结构预测资源，助力药物靶点发现与蛋白质组学研究。',
    tags: ['AI', '蛋白质', '药物发现'],
    url: 'https://alphafold.ebi.ac.uk',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ebi.ac.uk&sz=128',
    brand: 'ChEMBL',
    name: '生物活性化学分子数据库',
    description: '包含具有药物类特性的化学实体及其生物活性数据，是虚拟筛选和药理学研究的核心资源。',
    tags: ['化学数据库', '生物活性', '科研'],
    url: 'https://www.ebi.ac.uk/chembl/',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=docker.com&sz=128',
    brand: 'Docker',
    name: '容器化部署平台',
    description: '为生命科学计算环境提供标准化的容器支持，确保生物信息分析流程在不同系统间的重现性。',
    tags: ['IT', '容器', '环境一致性'],
    url: 'https://www.docker.com',
    roles: ['it', 'rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=ich.org&sz=128',
    brand: 'ICH',
    name: '国际人用药品注册技术协调会',
    description: '发布 Q (质量)、S (安全)、E (有效性) 及 M (多学科) 领域的国际药品注册技术指南。',
    tags: ['法规', '指南', '国际标准'],
    url: 'https://www.ich.org',
    roles: ['reg', 'quality', 'clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=usp.org&sz=128',
    brand: 'USP',
    name: '美国药典',
    description: '提供药品质量标准、参考标准品信息及实验室分析方法，是全球质量控制的重要依据。',
    tags: ['标准', '药典', '质量控制'],
    url: 'https://www.usp.org',
    roles: ['quality', 'reg', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=edqm.eu&sz=128',
    brand: 'Ph. Eur.',
    name: '欧洲药典',
    description: '欧洲药品质量管理局 (EDQM) 发布的药品质量标准，涵盖原料药、制剂及生物制品。',
    tags: ['标准', '药典', '质量管理'],
    url: 'https://www.edqm.eu/en/european-pharmacopoeia',
    roles: ['quality', 'reg', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=cochranelibrary.com&sz=128',
    brand: 'Cochrane Library',
    name: '循证医学证据库',
    description: '提供高质量的系统评价和临床试验荟萃分析，是临床决策和药物有效性评估的关键依据。',
    tags: ['循证医学', '临床评价', '数据库'],
    url: 'https://www.cochranelibrary.com',
    roles: ['clinical', 'rd', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=gs1.org&sz=128',
    brand: 'GS1 Healthcare',
    name: '全球药品追溯标准',
    description: '提供全球通用的药品条码和唯一标识 (UDI) 标准，保障供应链安全与患者用药追溯。',
    tags: ['追溯', '供应链', '物流标准'],
    url: 'https://www.gs1.org/industries/healthcare',
    roles: ['production', 'quality', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=emerson.com&sz=128',
    brand: 'Emerson DeltaV',
    name: '分布式控制系统',
    description: '先进的生产过程自动化控制系统，广泛应用于生物药上游发酵和下游纯化工艺。',
    tags: ['自动化', 'DCS', '生产控制'],
    url: 'https://www.emerson.com/en-us/automation/deltav',
    roles: ['production', 'it']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=biorender.com&sz=128',
    brand: 'BioRender',
    name: '生物医学绘图工具',
    description: '专业的生物医学科学插图在线绘制平台，提供海量预设图标，助力论文与方案演示。',
    tags: ['设计', '绘图', '学术演示'],
    url: 'https://biorender.com',
    roles: ['rd', 'clinical', 'reg', 'market']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=zotero.org&sz=128',
    brand: 'Zotero',
    name: '文献管理工具',
    description: '开源、免费的文献收集、组织、引用管理工具，支持跨平台协作与网页抓取。',
    tags: ['文献管理', '协作', '科研工具'],
    url: 'https://www.zotero.org',
    roles: ['rd', 'reg', 'clinical']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=opentargets.org&sz=128',
    brand: 'Open Targets',
    name: '药物靶点鉴定平台',
    description: '整合基因、表型、药物和疾病关联数据，系统性地识别和优先排序候选药物靶点。',
    tags: ['靶点发现', '基因数据', 'RD'],
    url: 'https://www.opentargets.org',
    roles: ['rd']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=slack.com&sz=128',
    brand: 'Slack',
    name: '团队协作通讯平台',
    description: '高效的企业内部即时通讯工具，支持丰富的插件集成，加速研发与生产跨部门协作。',
    tags: ['协作', '即时通讯', 'IT工具'],
    url: 'https://slack.com',
    roles: ['it', 'rd', 'quality', 'production']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=clarivate.com&sz=128',
    brand: 'Web of Science',
    name: '科学文献引文库',
    description: '全球核心学术期刊索引，支持引文分析、影响因子查询及研究前沿领域追踪。',
    tags: ['文献', '引文分析', '学术'],
    url: 'https://webofscience.com',
    roles: ['rd', 'reg']
  },
  {
    logo: 'https://www.google.com/s2/favicons?domain=pharmaintelligence.informa.com&sz=128',
    brand: 'Pharmaprojects',
    name: '新药管线跟踪数据库',
    description: 'Informa 旗下的全球新药研发管线追踪平台，提供最新研发进度与竞品情报。',
    tags: ['竞品分析', '研发管线', '准入'],
    url: 'https://pharma.informa.com/products/data-and-analysis/pharmaprojects',
    roles: ['market', 'rd', 'reg']
  }
];
