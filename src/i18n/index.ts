import { createI18n } from 'vue-i18n'

export const messages = {
  en: {
    nav: {
      home: 'Home',
      learn: 'Learn',
      practice: 'Practice',
      test: 'Test',
      admin: 'Admin',
    },
    home: {
      title: 'Master Git & Version Control',
      subtitle: 'Learn Git, GitHub, GitLab, Git Flow, and SVN through interactive tutorials and hands-on practice',
      cta: 'Start Learning',
      features: {
        interactive: 'Interactive Tutorials',
        interactiveDesc: 'Learn Git basics, GitHub workflows, Git Flow, and SVN with guided lessons',
        practice: 'Hands-On Practice',
        practiceDesc: 'Browser-based terminal simulation with real-time feedback',
        test: 'Comprehensive Tests',
        testDesc: 'Quiz yourself with our assessment tests to verify your knowledge',
        progress: 'Progress Tracking',
        progressDesc: 'Save your progress and continue where you left off',
      },
      sections: {
        learn: {
          title: 'Learn',
          description: 'Structured lessons covering all aspects of version control',
        },
        practice: {
          title: 'Practice',
          description: 'Guided exercises with immediate feedback and hints',
        },
        test: {
          title: 'Test',
          description: 'Quizzes and assessments to measure your understanding',
        },
      },
      pricing: {
        title: 'Simple, Transparent Pricing',
        basic: 'Basic',
        basicDesc: 'Perfect for beginners',
        basicFeature1: 'Git fundamentals',
        basicFeature2: 'Interactive tutorials',
        basicFeature3: 'Basic practice exercises',
        free: 'Free',
        pro: 'Pro',
        proDesc: 'For advanced learners',
        proFeature1: 'Everything in Basic',
        proFeature2: 'Git Flow advanced',
        proFeature3: 'CI/CD integration',
        proFeature4: 'Terminal simulation',
        upgrade: 'Upgrade to Pro',
        started: 'Get Started',
      },
      cta2: 'Ready to master version control?',
      ctaButton: 'Start Your Journey Today',
    },
    learn: {
      title: 'Learn Git & Version Control',
      description: 'Choose a topic to get started',
      placeholder: 'Learn content is coming soon. Continue prompting to customize this section!',
    },
    practice: {
      title: 'Practice Terminal',
      description: 'Sharpen your skills with hands-on exercises',
      placeholder: 'Practice exercises are coming soon. Continue prompting to customize this section!',
    },
    test: {
      title: 'Test Your Knowledge',
      description: 'Take quizzes to assess your understanding',
      placeholder: 'Tests are coming soon. Continue prompting to customize this section!',
    },
    admin: {
      title: 'Admin Panel',
      description: 'Manage tutorials and content',
      placeholder: 'Admin panel is coming soon. Continue prompting to customize this section!',
    },
  },
  ko: {
    nav: {
      home: '홈',
      learn: '배우기',
      practice: '실습',
      test: '테스트',
      admin: '관리자',
    },
    home: {
      title: 'Git 및 버전 관리 마스터하기',
      subtitle: '대화형 튜토리얼과 실습을 통해 Git, GitHub, GitLab, Git Flow, SVN을 배워보세요',
      cta: '학습 시작',
      features: {
        interactive: '대화형 튜토리얼',
        interactiveDesc: '가이드된 강의를 통해 Git 기초, GitHub 워크플로우, Git Flow 및 SVN 배우기',
        practice: '실습',
        practiceDesc: '브라우저 기반 터미널 시뮬레이션과 실시간 피드백',
        test: '포괄적인 테스트',
        testDesc: '우리의 평가 테스트로 지식을 검증하세요',
        progress: '진행률 추적',
        progressDesc: '진행 상황을 저장하고 중단한 부분에서 계속하세요',
      },
      sections: {
        learn: {
          title: '배우기',
          description: '버전 관리의 모든 측면을 다루는 구조화된 강의',
        },
        practice: {
          title: '실습',
          description: '즉각적인 피드백과 힌트가 포함된 가이드된 연습',
        },
        test: {
          title: '테스트',
          description: '이해도를 측정하는 퀴즈 및 평가',
        },
      },
      pricing: {
        title: '간단하고 투명한 가격',
        basic: '기본',
        basicDesc: '초보자에게 완벽',
        basicFeature1: 'Git 기초',
        basicFeature2: '대화형 튜토리얼',
        basicFeature3: '기본 실습 연습',
        free: '무료',
        pro: '프로',
        proDesc: '고급 학습자용',
        proFeature1: '기본의 모든 기능',
        proFeature2: 'Git Flow 고급',
        proFeature3: 'CI/CD 통합',
        proFeature4: '터미널 시뮬레이션',
        upgrade: '프로로 업그레이드',
        started: '시작하기',
      },
      cta2: '버전 관리를 마스터할 준비가 되셨나요?',
      ctaButton: '오늘 시작하세요',
    },
    learn: {
      title: 'Git 및 버전 관리 배우기',
      description: '주제를 선택하여 시작하세요',
      placeholder: '배우기 콘텐츠가 곧 제공될 예정입니다. 이 섹션을 사용자 정의하려면 계속 프롬프트하세요!',
    },
    practice: {
      title: '실습 터미널',
      description: '실습 문제로 기술을 연마하세요',
      placeholder: '실습 문제가 곧 제공될 예정입니다. 이 섹션을 사용자 정의하려면 계속 프롬프트하세요!',
    },
    test: {
      title: '지식 테스트',
      description: '퀴즈를 풀어 이해도를 평가하세요',
      placeholder: '테스트가 곧 제공될 예정입니다. 이 섹션을 사용자 정의하려면 계속 프롬프트하세요!',
    },
    admin: {
      title: '관리자 패널',
      description: '튜토리얼 및 콘텐츠 관리',
      placeholder: '관리자 패널이 곧 제공될 예정입니다. 이 섹션을 사용자 정의하려면 계속 프롬프트하세요!',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
