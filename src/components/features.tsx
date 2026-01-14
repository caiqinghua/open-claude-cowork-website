'use client';

import { Bot, FolderOpen, Eye, Shield, Settings } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI 协作伙伴',
    description: '不仅是 GUI,更是可执行代码、管理文件、创作 PPT、分析研究的 AI 助手。支持任意编程语言,用自然语言描述任务即可执行。',
  },
  {
    icon: FolderOpen,
    title: '会话管理',
    description: '创建自定义工作目录的会话,恢复任意历史对话。完整的本地会话历史(SQLite 存储),支持安全删除和自动持久化。',
  },
  {
    icon: Eye,
    title: '实时流式输出',
    description: '逐 token 流式输出,查看 Claude 的推理过程。支持 Markdown 渲染及语法高亮,可视化工具调用及状态指示器。',
  },
  {
    icon: Shield,
    title: '工具权限控制',
    description: '敏感操作需明确批准,按工具允许或拒绝。交互式决策面板,完全控制 Claude 的行为,确保 AI 操作安全可控。',
  },
  {
    icon: Settings,
    title: '配置复用',
    description: '直接复用 ~/.claude/settings.json 配置,相同的 API keys、base URL、模型。一次配置,处处使用,零学习成本。',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            核心功能特性
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open Claude Cowork 提供完整的可视化 AI 协作体验
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
