import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Main container
  container: { 
    padding: 16, 
    backgroundColor: '#f0f4f8', 
    flex: 1 
  },
  text: { 
    fontSize: 16, 
    color: '#333', 
  },

  // Header section (About Me)
  header: { 
    padding: 16, 
    backgroundColor: '#4a90e2', 
    alignItems: 'center', 
    borderBottomWidth: 2, 
    borderColor: '#357ABD', 
    borderRadius: 12, 
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // for android shadow
  },
  headerText: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: 'white', 
  },

  // Buttons
  button: { 
    paddingVertical: 10, 
    paddingHorizontal: 16, 
    backgroundColor: '#4a90e2', 
    borderRadius: 12, 
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginHorizontal: 4,
  },
  buttonText: { 
    color: 'white', 
    fontWeight: '700', 
    fontSize: 16,
  },

  // TextInput
  textInput: { 
    borderWidth: 1, 
    borderColor: '#bbb', 
    borderRadius: 12, 
    padding: 12, 
    fontSize: 16, 
    backgroundColor: '#fff', 
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  // Teacher Message Box
  teacherBox: { 
    backgroundColor: '#fff5e1', 
    borderRadius: 12, 
    padding: 16, 
    marginVertical: 12, 
    borderWidth: 1, 
    borderColor: '#f6d786',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  teacherTitle: { 
    fontWeight: '700', 
    marginBottom: 8, 
    fontSize: 17, 
    color: '#e07b39',
  },
  teacherMessage: { 
    marginBottom: 10, 
    fontSize: 15, 
    color: '#444',
  },
  teacherActions: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end' 
  },

  // Tasbih List Row
  tasbihRow: { 
    padding: 14, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 12, 
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tasbihPhrase: { 
    fontSize: 17, 
    fontWeight: '600', 
    color: '#333',
  },
  tasbihCounterRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10,
  },
  tasbihCount: { 
    marginHorizontal: 14, 
    fontSize: 16, 
    fontWeight: '600',
    color: '#4a90e2',
  },

  // Section wrapper for Search/Add or Tasbih
  section: { 
    padding: 12, 
    marginVertical: 8, 
    backgroundColor: '#ffffff', 
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#4a90e2',
  },
});
