import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './aboutStyles';
interface AboutProps {
  activeSection: null;
  setActiveSection: React.Dispatch<React.SetStateAction<null>>;
  sections: {
    title: string;
    content: string;
  }[];
}

const About: React.FC<AboutProps> = ({
  activeSection,
  setActiveSection,
  sections
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.accordionContainer}>
        {sections.map((section, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.titleContainer}
              onPress={() => setActiveSection(index)}>
              <Text style={styles.title}>{section.title}</Text>
            </TouchableOpacity>
            {activeSection === index && (
              <View style={styles.contentContainer}>
                <Text style={styles.content}>{section.content}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default About;
