export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">qetta</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              로그인
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              시작하기
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            AI가 찾아주는
            <br />
            <span className="text-blue-600 dark:text-blue-400">나에게 딱 맞는 대출</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            소득금액증명원만 올리면 AI가 신용점수를 분석하고
            <br />
            최적의 대출 상품을 추천해드립니다
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg">
              무료로 시작하기
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-semibold rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all">
              작동 방식 보기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl my-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          간편하고 빠른 대출 매칭
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">PDF 업로드</h3>
            <p className="text-gray-600 dark:text-gray-300">
              소득금액증명원을 드래그 앤 드롭으로 간편하게 업로드
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AI 분석</h3>
            <p className="text-gray-600 dark:text-gray-300">
              첨단 OCR과 AI가 서류를 분석해 신용점수를 즉시 산출
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">맞춤 추천</h3>
            <p className="text-gray-600 dark:text-gray-300">
              당신의 조건에 딱 맞는 최적의 대출 상품을 추천
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          요금제
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">무료</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">기본 분석으로 시작하기</p>
            <div className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">₩0</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">기본 신용점수 (범위)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">일반 대출 추천</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              무료 시작
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 border-2 border-blue-500 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
              인기
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">프리미엄</h3>
            <p className="text-blue-100 mb-6">상세한 분석과 맞춤 추천</p>
            <div className="text-4xl font-bold mb-6 text-white">₩29,000</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-50">정확한 신용점수</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-50">대출 가능성 분석</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-50">맞춤형 대출 상품 추천</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-50">상세한 분석 리포트</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              프리미엄 시작
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 sm:p-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            소득금액증명원 업로드부터 대출 추천까지, 단 3분이면 충분합니다
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">qetta</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 qetta. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">이용약관</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">개인정보처리방침</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">문의</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
