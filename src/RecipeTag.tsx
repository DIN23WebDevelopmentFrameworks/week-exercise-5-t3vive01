import React from 'react'

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}


export default function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
  return (
   <div className='tag-list-box' onClick={() => onSelectTag(tagName)}>
     {tagName}
   </div>
  )
}
