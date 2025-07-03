import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface FloatingBottomProps {
  page: number;
  totalPages: number;
}

export default function FloatingBottom({ page, totalPages }: FloatingBottomProps) {
  return (
    <View style={styles.bottomContent}>
      <View style={styles.dotsRow}>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <View key={idx} style={[styles.dot, { opacity: page === idx ? 1 : 0.4 }]} />
        ))}
      </View>
      <TouchableOpacity style={styles.emailButton}>
        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/new-post.png' }} style={styles.emailIcon} />
        <Text style={styles.emailButtonText}>Continue with E-mail</Text>
      </TouchableOpacity>
      <View style={styles.socialRow}>
        <TouchableOpacity style={[styles.socialButton, { flex: 1 }]}>
          <Image source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} style={styles.socialIcon} />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.termsText}>
        By continuing you agree Terms of Services & Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContent: {
    position: 'absolute',
    bottom: 48,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 0,
    paddingHorizontal: 24,
    backgroundColor: 'transparent',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginHorizontal: 6,
  },
  emailButton: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
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
    marginBottom: 16,
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
    marginTop: 12,
  },
}); 