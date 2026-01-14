'use client';

import { Check, X } from 'lucide-react';

const advantages = [
  {
    title: '无需 Claude Max 订阅',
    claudeCode: '需要 Claude Max 订阅',
    openClaude: '支持国产大模型,降低成本',
  },
  {
    title: '可视化界面',
    claudeCode: '仅限终端操作',
    openClaude: '桌面图形化界面,更友好',
  },
  {
    title: '模型支持',
    claudeCode: '仅 Claude 模型',
    openClaude: 'GLM 4.7, MiniMax 2.1, Kimi, DeepSeek 等',
  },
  {
    title: '会话持久化',
    claudeCode: '会话不保存',
    openClaude: '完整历史记录,随时恢复',
  },
  {
    title: '工具权限控制',
    claudeCode: '无权限管理',
    openClaude: '敏感操作需明确授权',
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            为什么选择 Open Claude Cowork?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            对比 Claude Code 的改进和优势
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                {/* Title */}
                <div className="font-semibold text-foreground">{item.title}</div>

                {/* Claude Code */}
                <div className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item.claudeCode}</span>
                </div>

                {/* Open Claude Cowork */}
                <div className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item.openClaude}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            100% 兼容 Claude Code 配置文件
          </p>
          <code className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-primary">
            ~/.claude/settings.json
          </code>
        </div>
      </div>
    </section>
  );
}
