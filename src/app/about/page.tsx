import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            关于这个项目
          </h1>
          <p className="text-xl text-gray-600">
            了解 Next.js 和 Tailwind CSS 的强大功能
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">技术栈</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">N</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Next.js</h3>
                <p className="text-gray-600 text-sm">
                  React 框架，提供服务端渲染、静态生成、API 路由等功能。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Tailwind CSS</h3>
                <p className="text-gray-600 text-sm">
                  实用工具优先的 CSS 框架，快速构建现代界面。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">TS</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">TypeScript</h3>
                <p className="text-gray-600 text-sm">
                  为 JavaScript 添加静态类型检查，提升开发体验。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">R</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">React</h3>
                <p className="text-gray-600 text-sm">
                  用于构建用户界面的 JavaScript 库。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">项目特性</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">响应式设计，适配各种设备</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">现代化的 UI 组件库</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">TypeScript 类型安全</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">快速开发和热重载</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">SEO 友好的服务端渲染</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">开始使用</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">1. 克隆项目</h3>
              <div className="bg-gray-100 rounded p-3">
                <code className="text-sm text-gray-800">
                  git clone https://github.com/your-username/next-tailwind-demo.git
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">2. 安装依赖</h3>
              <div className="bg-gray-100 rounded p-3">
                <code className="text-sm text-gray-800">
                  npm install
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">3. 运行开发服务器</h3>
              <div className="bg-gray-100 rounded p-3">
                <code className="text-sm text-gray-800">
                  npm run dev
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">4. 在浏览器中打开</h3>
              <div className="bg-gray-100 rounded p-3">
                <code className="text-sm text-gray-800">
                  http://localhost:3000
                </code>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}