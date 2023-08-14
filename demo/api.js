import { centerElementExample } from '../apiExamples/centerElement';

export function initCarouselApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    centerElementExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initCarouselApiExamples(initCount + 1);
      }, 100);
    }
  }
}
