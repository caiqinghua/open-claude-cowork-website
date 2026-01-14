'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    title: '克隆项目',
    command: 'git clone https://github.com/caiqinghua/open-claude-cowork.git',
  },
  {
    title: '安装依赖',
    command: 'cd open-claude-cowork && npm install',
  },
  {
    title: '配置 Claude',
    command: '# 复制 Claude Code 配置\ncp ~/.claude/settings.json ./settings.json',
  },
  {
    title: '启动应用',
    command: 'npm start',
  },
];

export function QuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="quick-start" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            快速开始
          </h2>
          <p className="text-lg text-muted-foreground">
            4 步完成安装和配置
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              {/* Content */}
              <div className="ml-12">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Code Block */}
                <div className="relative group">
                  <pre className="bg-background border border-border rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-foreground">
                      {step.command}
                    </code>
                  </pre>

                  {/* Copy Button */}
                  <button
                    onClick={() => copyToClipboard(step.command, index)}
                    className="absolute top-2 right-2 p-2 rounded-md bg-card border border-border hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100"
                    title="复制命令"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 rounded-lg bg-primary/10 border border-primary/30">
          <p className="text-sm text-foreground mb-2">
            💡 <strong>提示:</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            确保已安装 Node.js 18+ 和 npm。如需使用国产大模型,请修改 settings.json 中的 base_url 和 api_key 配置。
          </p>
        </div>
      </div>
    </section>
  );
}
