'useclient'

import{useCallback, useEffect, useState}from "react";

interface ModelProps {
    isOpen?:boolean;
    onClose:()=> void;
    onSubmit:()=> void ;
    title?:string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLable:string;
    disable?:boolean;
    secondaryAction:()=> void;
    secondaryLable?:string;

}

const Model:React.FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLable,
  disable,
  secondaryAction,
  secondaryLable
}) => {
  const[showmodel,setShowmodel]=useState(isOpen)

  useEffect(()=>{
    setShowmodel(isOpen)

  },[isOpen])

  const handleClose=useCallback(()=>{
    if(disable){
      return;
    }
    setShowmodel(false)
    setTimeout(()=>{
      onClose()
    },300)

  },[disable,onclose])

  const handleSubmit=useCallback(()=>{
    if(disable){
      return
    }


  },[disable,onSubmit])

  const handleSecondaryAction=useCallback(()=>{
    if(disable || !secondaryAction){
      return
    }
    secondaryAction()

  },[disable,secondaryAction])

  if(!isOpen){
    return null
  }


  return (
    <>
    </>
  )
}

export default Model