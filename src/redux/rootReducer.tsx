// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import videoModalReducer from './features/videoModalSlice';
import contactModalReducer from './features/contactModalSlice';
import sidePanelReducer from './features/sidePanelSlice';
import searchModalReducer from './features/searchModalSlice';
import sidebarReducer from './features/sidebarSlice';
import igPostModalReducer from './features/igPostSlice';
import rightSidebarReducer from './features/rightSidebarSlice';
import blogModalReducer from './features/blogModalSlice';
import blogLandscapeModalReducer from './features/blogLandscapeModalSlice';
import lightboxReducer from './features/lightboxSlice';
import sectionReducer from './features/sectionSlice';

const rootReducer = combineReducers({
  videoModal: videoModalReducer,
  contactModal: contactModalReducer,
  sidePanel: sidePanelReducer,
  searchModal: searchModalReducer,
  sidebar: sidebarReducer,
  igPostModal: igPostModalReducer,
  rightSidebar: rightSidebarReducer,
  blogModal: blogModalReducer,
  blogLandscapeModal: blogLandscapeModalReducer,
  lightbox: lightboxReducer,
  section: sectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
