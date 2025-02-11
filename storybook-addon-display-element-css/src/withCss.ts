import { DecoratorFunction, useGlobals } from '@storybook/addons';
import { addons } from '@storybook/addons';
import { useEffect } from '@storybook/addons';
import { getCss } from './utils/processing/getCss';
import { EVENTS } from './constants';

export const withCss: DecoratorFunction = (StoryFn, context) => {
  const [{ myAddon }] = useGlobals();

  useEffect(() => {
    const channel = addons.getChannel();
    channel.emit(EVENTS.CLEAR);
    if (myAddon) {
      // Focus on <html> element instead of #root
      const eventType = 'click'
      const targetElement = window.document.querySelector('html');
      
      if (targetElement) {
        targetElement.addEventListener(eventType, getCss);
        return () => targetElement.removeEventListener(eventType, getCss);
      }
    }
  }, [context.id, myAddon]);

  return StoryFn();
};