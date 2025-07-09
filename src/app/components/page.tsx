import Navigation from '@/components/Navigation'

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI 组件展示
          </h1>
          <p className="text-xl text-gray-600">
            常用的 Tailwind CSS 组件和样式
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">按钮组件</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                主要按钮
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                次要按钮
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                边框按钮
              </button>
              <button className="text-blue-500 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors">
                文字按钮
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">卡片组件</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">卡片标题</h3>
                  <p className="text-gray-600 mb-4">这是一个示例卡片，展示了基本的卡片布局和样式。</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    了解更多
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">另一个卡片</h3>
                  <p className="text-gray-600 mb-4">展示不同颜色渐变的卡片样式。</p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                    查看详情
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">第三个卡片</h3>
                  <p className="text-gray-600 mb-4">紫色到粉色的渐变背景。</p>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                    立即体验
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">表单组件</h2>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入您的邮箱"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">消息</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                    placeholder="请输入您的消息"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">我同意服务条款</label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  提交
                </button>
              </form>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">徽章和标签</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">蓝色徽章</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">绿色徽章</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">黄色徽章</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">红色徽章</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">紫色徽章</span>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">进度条</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>项目进度</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>任务完成度</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}