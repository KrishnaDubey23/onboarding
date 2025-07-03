import React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const AVATAR_SIZE = width * 0.18;
const BAR_WIDTH = width * 0.05;
const BAR_HEIGHT = height * 0.18;
const CARD_WIDTH = width * 0.32;
const CARD_HEIGHT = height * 0.07;

const AVATARS = [
  { uri: 'https://randomuser.me/api/portraits/men/1.jpg', style: { top: height * 0.10, left: width * 0.10 } },
  { uri: 'https://randomuser.me/api/portraits/men/2.jpg', style: { top: height * 0.04, left: width * 0.41 } },
  { uri: 'https://randomuser.me/api/portraits/women/1.jpg', style: { top: height * 0.10, right: width * 0.10 } },
  { uri: 'https://randomuser.me/api/portraits/women/2.jpg', style: { top: height * 0.24, left: width * 0.41 } },
];

const DOTS = Array.from({ length: 80 }).map(() => {
    const size = Math.random() * 4 + 1;
    return {
        left: Math.random() * width,
        top: Math.random() * height,
        width: size,
        height: size,
        borderRadius: size / 2,
        opacity: Math.random() * 0.5 + 0.1,
    };
});

export default function On1() {
  return (
    <LinearGradient
      colors={['#6B5EE4', '#3E4DB8']}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Static Dots */}
      {DOTS.map((dot, idx) => (
        <View key={idx} style={[styles.decoration, dot]} />
      ))}

      {/* Concentric Circles */}
      <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
        <Circle cx={width / 2} cy={height * 0.32} r={width * 0.3} stroke="#F5F6FA" strokeOpacity={Math.min(0.05 * 1.4, 1)} strokeWidth="2" fill="none" />
        <Circle cx={width / 2} cy={height * 0.32} r={width * 0.2} stroke="#F5F6FA" strokeOpacity={Math.min(0.07 * 1.4, 1)} strokeWidth="2" fill="none" />
        <Circle cx={width / 2} cy={height * 0.32} r={width * 0.1} stroke="#F5F6FA" strokeOpacity={Math.min(0.09 * 1.4, 1)} strokeWidth="2" fill="none" />
      </Svg>
      
      {/* Top Section with bars, avatars, wavy line, streak card, and decorations */}
      <View style={[styles.topSection, { top: height * 0.18 }]}> 
        {/* Decorative hexagons/circles */}
        <View style={[styles.decoration, { top: height * 0.05, left: width * 0.20, width: width * 0.03, height: width * 0.03, borderRadius: width * 0.015, opacity: 0.2 }]} />
        <View style={[styles.decoration, { top: height * 0.08, left: width * 0.35, width: width * 0.02, height: width * 0.02, borderRadius: width * 0.01, opacity: 0.3 }]} />
        <View style={[styles.decoration, { top: height * 0.06, left: width * 0.50, width: width * 0.025, height: width * 0.025, borderRadius: width * 0.0125, opacity: 0.18 }]} />
        {/* Wavy line */}
        <Svg width={width} height={height * 0.1} style={styles.wavyLine}>
          <Path
            d={`M${width * 0.07},${height * 0.08} Q${width * 0.23},${height * 0.01} ${width * 0.41},${height * 0.05} T${width * 0.75},${height * 0.05} Q${width * 0.94},${height * 0.08} ${width * 0.99},${height * 0.03}`}
            stroke="#fff"
            strokeWidth={2}
            fill="none"
            opacity={0.3}
          />
        </Svg>
        {/* Removed streak card and avatars */}
      </View>
      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Challenges Section */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionLabel}>Challenges</Text>
          <View style={styles.challengeCard}>
            {/* Left: Icon + Titles */}
            <View style={styles.challengeLeft}>
              <View style={styles.challengeIconCircle}>
                <Text style={{fontSize: 18}}>🏃🏻</Text>
              </View>
              <View>
                <Text style={styles.challengeTitle}>Best Runners!</Text>
                <Text style={styles.challengeSubtitle}>5 days 13 hours left</Text>
              </View>
            </View>
            {/* Right: Friends joined */}
            <View style={styles.challengeRight}>
              <Text style={styles.challengeFriends}>2 friends joined</Text>
              <View style={styles.avatarsRow}>
                <Image source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} style={styles.avatarSmall} />
                <Image source={{uri: 'https://randomuser.me/api/portraits/women/65.jpg'}} style={[styles.avatarSmall, {marginLeft: -10}]} />
              </View>
            </View>
            {/* Progress Bar */}
            <View style={styles.progressBarTrack}>
              <View style={styles.progressBarFill} />
            </View>
          </View>
        </View>
        {/* Habits Section */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionLabel}>Habits</Text>
          {/* Habit 1 */}
          <View style={styles.habitCard}>
            <View style={[styles.habitIconCircle, {backgroundColor: '#E3EDFF'}]}>
              <Text style={{fontSize: 18, color: '#3E4DB8'}}>💧</Text>
            </View>
            <View style={styles.habitTextWrap}>
              <Text style={styles.habitTitle}>Drink the water</Text>
              <Text style={styles.habitSubtitle}>500/2000 ML</Text>
            </View>
            <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} style={styles.avatarSmall} />
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/65.jpg'}} style={[styles.avatarSmall, {marginLeft: -10}]} />
              <Image source={{uri: 'https://randomuser.me/api/portraits/men/45.jpg'}} style={[styles.avatarSmall, {marginLeft: -10}]} />
              <View style={styles.avatarMore}><Text style={styles.avatarMoreText}>+3</Text></View>
            </View>
          </View>
          {/* Habit 2 */}
          <View style={styles.habitCard}>
            <View style={[styles.habitIconCircle, {backgroundColor: '#FFF6E3'}]}>
              <Text style={{fontSize: 18, color: '#F7B801'}}>🚶</Text>
            </View>
            <View style={styles.habitTextWrap}>
              <Text style={styles.habitTitle}>Walk</Text>
              <Text style={styles.habitSubtitle}>0/10000 STEPS</Text>
            </View>
            <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} style={styles.avatarSmall} />
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/65.jpg'}} style={[styles.avatarSmall, {marginLeft: -10}]} />
              <View style={styles.avatarAdd}><Text style={styles.avatarAddText}>+</Text></View>
            </View>
          </View>
          {/* Habit 3 */}
          <View style={styles.habitCard}>
            <View style={[styles.habitIconCircle, {backgroundColor: '#FFEDE3'}]}>
              <Text style={{fontSize: 18, color: '#FF9900'}}>🧘</Text>
            </View>
            <View style={styles.habitTextWrap}>
              <Text style={styles.habitTitle}>Meditate</Text>
              <Text style={styles.habitSubtitle}>30/30 MIN</Text>
            </View>
            <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://randomuser.me/api/portraits/women/65.jpg'}} style={styles.avatarSmall} />
              <View style={styles.avatarCheck}><Text style={styles.avatarCheckText}>✓</Text></View>
            </View>
          </View>
        </View>
        {/* Existing Title and Content */}
        <Text style={styles.title}>Track{"\n"}<Text style={styles.titleStrong}>your Progress</Text></Text>
        <Text style={styles.subtitle}>
          Everyday you get one step closer to your goals.Don't give up.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
  decoration: {
    position: 'absolute',
    backgroundColor: '#fff',
  },
  wavyLine: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
  },
  streakCard: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 2,
  },
  streakLabel: {
    color: '#7B61FF',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  streakValue: {
    color: '#1E3CFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
  },
  mainContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 36,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    lineHeight: 34,
  },
  titleStrong: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 8,
  },
  sectionBlock: { width: '100%', marginBottom: 18 },
  sectionLabel: { color: '#E5E5E5', fontWeight: '600', fontSize: 13, marginBottom: 8, marginLeft: 2, letterSpacing: 0.5 },
  challengeCard: {
    backgroundColor: '#fff', borderRadius: 20, padding: 16, marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, elevation: 2, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative'
  },
  challengeLeft: { flexDirection: 'row', alignItems: 'flex-start' },
  challengeIconCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E3D6FF', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  challengeTitle: { fontWeight: 'bold', color: '#222', fontSize: 15 },
  challengeSubtitle: { color: '#B0B0B0', fontSize: 12, marginTop: 2 },
  challengeRight: { alignItems: 'flex-end', justifyContent: 'flex-start' },
  challengeFriends: { color: '#B0B0B0', fontSize: 12, marginBottom: 2 },
  avatarsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  avatarSmall: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#fff', backgroundColor: '#eee' },
  progressBarTrack: { position: 'absolute', left: 16, right: 16, bottom: 12, height: 4, borderRadius: 2, backgroundColor: '#E5E5E5', overflow: 'hidden' },
  progressBarFill: { width: '50%', height: 4, borderRadius: 2, backgroundColor: '#3E4DB8' },
  habitCard: {
    backgroundColor: '#fff', borderRadius: 20, flexDirection: 'row', alignItems: 'center', padding: 14, marginBottom: 14, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, elevation: 2
  },
  habitIconCircle: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  habitTextWrap: { flex: 1 },
  habitTitle: { fontWeight: 'bold', color: '#222', fontSize: 15 },
  habitSubtitle: { color: '#B0B0B0', fontSize: 12, marginTop: 2 },
  avatarMore: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginLeft: -10, borderWidth: 1, borderColor: '#E5E5E5' },
  avatarMoreText: { color: '#7D8A9C', fontWeight: 'bold', fontSize: 12 },
  avatarAdd: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginLeft: -10, borderWidth: 1, borderColor: '#E5E5E5' },
  avatarAddText: { color: '#222', fontWeight: 'bold', fontSize: 16, marginTop: -2 },
  avatarCheck: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#00D38C', alignItems: 'center', justifyContent: 'center', marginLeft: -10 },
  avatarCheckText: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginTop: -2 },
});