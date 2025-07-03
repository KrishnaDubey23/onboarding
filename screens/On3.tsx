import React, { useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, PanResponder, GestureResponderEvent, PanResponderGestureState } from 'react-native';
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

interface On3Props {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export default function On3({ onSwipeLeft, onSwipeRight }: On3Props) {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        // Only respond to horizontal swipes
        return Math.abs(gestureState.dx) > 20 && Math.abs(gestureState.dy) < 20;
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -50 && onSwipeLeft) {
          onSwipeLeft();
        } else if (gestureState.dx > 50 && onSwipeRight) {
          onSwipeRight();
        }
      },
    })
  ).current;

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      <LinearGradient
        colors={['#6B5EE4', '#3E4DB8']}
        style={styles.container}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        {/* Static Dots */}
        {DOTS.map((dot, idx) => (
          <View key={idx} style={[styles.dotDecoration, dot]} />
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
        <View style={styles.content}>
          {/* Zig-Zag Cards */}
          <View style={[styles.zigzagCards, { marginTop: 48 }]}>
            {/* Breakfast Nutrition Card - left, slightly indented */}
            <View style={[styles.breakfastCard, styles.zigzagLeftMid]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 4 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.sunIcon}>☀</Text>
                  <Text style={styles.breakfastTitle}>Breakfast</Text>
                  <Text style={styles.breakfastCalories}>1350 calories</Text>
                </View>
                <View style={styles.plusCircle}>
                  <Text style={styles.plusText}>+</Text>
                </View>
              </View>
              <View style={styles.nutritionRow}>
                <View style={styles.nutritionBlock}>
                  <Text style={styles.nutritionValue}>85</Text>
                  <Text style={styles.nutritionLabel}>Proteins</Text>
                </View>
                <View style={styles.nutritionBlock}>
                  <Text style={styles.nutritionValue}>30</Text>
                  <Text style={styles.nutritionLabel}>Fats</Text>
                </View>
                <View style={styles.nutritionBlock}>
                  <Text style={styles.nutritionValue}>184</Text>
                  <Text style={styles.nutritionLabel}>Carbs</Text>
                </View>
                <View style={styles.nutritionBlock}>
                  <Text style={styles.nutritionValue}>54%</Text>
                  <Text style={styles.nutritionLabel}>RDC</Text>
                </View>
              </View>
              <View style={styles.dateChip}>
                <Text style={styles.dateChipIcon}>📅</Text>
                <Text style={styles.dateChipText}>19 June</Text>
              </View>
            </View>
            {/* Oatmeal Entry Card - right, overlapping breakfast */}
            <View style={[styles.oatmealCard, styles.zigzagRightOverlap]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.oatmealTitle}>Oatmeal</Text>
                <Text style={styles.oatmealKcal}>150 kcal</Text>
              </View>
              <View style={styles.oatmealDivider} />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.oatmealDesc}>Oatmeal</Text>
                  <Text style={styles.oatmealSubdesc}>1 bowl (150 kcal)</Text>
                </View>
                <View style={styles.counterRow}>
                  <TouchableOpacity style={styles.counterBtn}><Text style={styles.counterBtnText}>-</Text></TouchableOpacity>
                  <Text style={styles.counterValue}>0</Text>
                  <TouchableOpacity style={styles.counterBtn}><Text style={styles.counterBtnText}>+</Text></TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* Existing Title and Content */}
          <View style={{ alignSelf: 'flex-start', width: '100%' }}>
            <Text style={styles.title}>Goal{"\n"}<Text style={styles.titleStrong}>Based Nutrition</Text></Text>
            <Text style={styles.subtitle}>
              Get diet plans tailored to your lifestyle and fitness goals whether it's fat loss, muscle gain, or body recomposition.
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
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
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 24,
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
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
    textAlign: 'left',
    marginBottom: 12,
    marginTop: 8,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 3,
  },
  emailButton: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    resizeMode: 'contain',
  },
  emailButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 3,
    flex: 1,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
    resizeMode: 'contain',
  },
  socialText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
  termsText: {
    color: '#e0e0e0',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
  facebookButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotDecoration: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 0,
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
  progressCard: {
    backgroundColor: '#fff', borderRadius: 20, padding: 14, marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 7, elevation: 2,
  },
  progressLabel: { color: '#222', fontWeight: 'bold', fontSize: 13.5, marginBottom: 1.8 },
  progressPercent: { color: '#222', fontWeight: 'bold', fontSize: 27, marginBottom: 5.4 },
  goalDropdown: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F6FA', borderRadius: 14.4, paddingHorizontal: 10.8, paddingVertical: 3.6, alignSelf: 'flex-start' },
  goalDropdownText: { color: '#222', fontWeight: '600', fontSize: 11.7, marginRight: 3.6 },
  goalDropdownIcon: { color: '#222', fontSize: 11.7 },
  progressCircleWrap: { width: 54, height: 54, alignItems: 'center', justifyContent: 'center', marginBottom: 1.8 },
  sunIconCircle: { position: 'absolute', top: 16.2, left: 16.2, width: 21.6, height: 21.6, borderRadius: 10.8, backgroundColor: '#FFF9E3', alignItems: 'center', justifyContent: 'center' },
  progressCalories: { color: '#222', fontWeight: 'bold', fontSize: 18, marginTop: 1.8 },
  progressCaloriesLabel: { color: '#B0B0B0', fontSize: 10.8 },
  breakfastCard: {
    backgroundColor: '#fff', borderRadius: 20, padding: 16, marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, elevation: 2,
    width: '100%',
    minHeight: 110,
  },
  sunIcon: { fontSize: 16, marginRight: 6 },
  breakfastTitle: { color: '#222', fontWeight: 'bold', fontSize: 16, marginRight: 8 },
  breakfastCalories: { color: '#B0B0B0', fontSize: 13, marginRight: 8 },
  plusCircle: { 
    width: 24, height: 24, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 2, elevation: 1,
    position: 'relative',
    marginLeft: 0,
  },
  plusText: { color: '#222', fontWeight: 'bold', fontSize: 18, marginTop: -2 },
  nutritionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14, marginBottom: 8 },
  nutritionBlock: { alignItems: 'center', flex: 1 },
  nutritionValue: { color: '#222', fontWeight: 'bold', fontSize: 14 },
  nutritionLabel: { color: '#B0B0B0', fontSize: 12, marginTop: 2 },
  dateChip: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 4, alignSelf: 'flex-start', marginTop: 4, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 2, elevation: 1 },
  dateChipIcon: { fontSize: 14, marginRight: 4 },
  dateChipText: { color: '#222', fontWeight: '600', fontSize: 13 },
  oatmealCard: {
    backgroundColor: '#fff', borderRadius: 20, padding: 16, marginBottom: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
    minHeight: 110,
  },
  oatmealTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  oatmealKcal: { color: '#000', fontWeight: 'bold', fontSize: 16 , marginBottom: 0},
  oatmealDivider: { height: 1, backgroundColor: '#000', opacity: 0.2, marginVertical: 10 },
  oatmealDesc: { color: '#000', fontWeight: 'bold', fontSize: 14 },
  oatmealSubdesc: { color: '#000', fontSize: 12, opacity: 0.7 },
  counterRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent' },
  counterBtn: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginHorizontal: 6 },
  counterBtnText: { color: '#222', fontWeight: 'bold', fontSize: 18 },
  counterValue: { color: '#000', fontWeight: 'bold', fontSize: 16, minWidth: 18, textAlign: 'center' },
  zigzagCards: {
    width: '100%',
    marginBottom: 0,
    marginTop: 48,
  },
  zigzagLeft: {
    alignSelf: 'center',
    width: '74%',
    marginBottom: 22,
    marginLeft: 0,
    zIndex: 2,
  },
  zigzagLeftMid: {
    alignSelf: 'flex-start',
    width: '82%',
    marginTop: 0,
    marginBottom: 32,
    marginLeft: 0,
    zIndex: 1,
  },
  zigzagRightOverlap: {
    alignSelf: 'flex-end',
    width: '82%',
    marginTop: -40,
    marginRight: 0,
    zIndex: 3,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 6,
  },
});