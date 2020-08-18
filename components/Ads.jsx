import React from 'react'
import useAds from '../hooks/useAds'

export const UnderQuestion = () => {
  const { underQuestion } = useAds()
  return (
    <div
      className="d-flex justify-content-center  mb-3"
      dangerouslySetInnerHTML={{
        __html: underQuestion,
      }}
    />
  )
}

export const UpQuestion = () => {
  const { upQuestion } = useAds()
  return (
    <div
      className="d-flex justify-content-center  mb-3"
      dangerouslySetInnerHTML={{
        __html: upQuestion,
      }}
    />
  )
}

export const AdsLeft = () => {
  const { adsLeft } = useAds()
  return (
    <div
      className="d-flex justify-content-center  mb-3"
      dangerouslySetInnerHTML={{
        __html: adsLeft,
      }}
    />
  )
}

export const AdsRight = () => {
  const { rightAds } = useAds()
  return (
    <div
      className="d-flex justify-content-center  mb-3"
      dangerouslySetInnerHTML={{
        __html: rightAds,
      }}
    />
  )
}

export const InResultModal = () => {
  const { inResultModal } = useAds()
  return (
    <div
      className="d-flex justify-content-center  mb-3"
      dangerouslySetInnerHTML={{
        __html: inResultModal,
      }}
    />
  )
}