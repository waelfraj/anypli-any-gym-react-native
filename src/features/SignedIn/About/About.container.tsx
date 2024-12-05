import React, { useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import About from './About';
import { CoachStackParamList } from '../../../navigations/Coach/CoachStackParamList';
import { ABOUT_SCREEN_NAME } from '../../../utils/constants/screenName';

/**
 * Container used to separate About logic as a wrapper to About screen
 * @returns JSX.Element
 */
interface AboutContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof ABOUT_SCREEN_NAME
  > {}

const AboutContainer: React.FC<AboutContainerProps> = ({
  navigation
}): JSX.Element => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
    },
    {
      title: 'sed do eiusmod tempor incididunt ut labore et dolore',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eiu'
    },
    {
      title: 'Duis aute irure dolor in reprehenderit',
      content:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur'
    }
  ];
  return (
    <About
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      sections={sections}
    />
  );
};

export default AboutContainer;
