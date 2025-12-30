import {initialSuggestion,initialComments} from '../data/initialData' 
import {createSlice} from '@reduxjs/toolkit'

const initialState={
  suggestion:initialSuggestion,
  comments:initialComments,
}

const feedbackSlice = createSlice({
  name:'feedback',
  initialState,
  reducers:{
    addSuggestion:(state,action)=>{
      const payload= action.payload;
      const newSuggestion = {
        id:Date.now(),
        title:payload.title,
        description:payload.description,
        category:payload.category || "Feature",
        status:payload.status || "Planned",
        upvotes:0,
        comments:0,
        upvoted:false,
      }
      state.suggestion.push(newSuggestion)
    },

    updateSuggestion : (state,action)=>{
      const updated = action.payload;
      const idx= state.suggestion.findIndex((s)=>s.id===updated.id);
      if(idx !== -1){
        state.suggestion[idx]={...state.suggestion[idx],...updated};
      }
    },

    deleteSuggestion:(state,action)=>{
      const id = action.payload;
      state.suggestion=state.suggestion.filter((s)=>s.id!==id)
      delete state.comments[id];
    },

    toggleUpvote : (state,action)=>{
      const id = action.payload;
      const item = state.suggestion.find((s)=>s.id===id);
      if(item){
        item.upvoted=!item.upvoted;
        item.upvotes=item.upvoted ? item.upvotes+1 : Math.max(0,item.upvotes-1)
      }
    },

    addComment : (state,action)=>{
      const{suggestionId,comment}=action.payload;
      if(!state.comments[suggestionId]) state.comments[suggestionId]=[]
      state.comments[suggestionId].push(comment)
      const item = state.suggestion.find((s)=>s.id===suggestionId)
      if(item)item.comments=(item.comments || 0)+1
    },

    replaceAll :(state,action)=>{
      return action.payload
    }
  }
})

export const{
  addSuggestion,
  addComment,
  updateSuggestion,
  deleteSuggestion,
  toggleUpvote,
  replaceAll
} =feedbackSlice.actions
export default feedbackSlice.reducer