import React from "react";
//Youtubeの動画を再生するためのパッケージ
import Youtube from "react-youtube";
import Style from "./VideoPlay.module.scss";

export const VideoPlay = ({ id }) => {
  return (
    //porpsで受け取ったidを取得
    <div className={Style.wrap}>
      <Youtube className={Style.video} videoId={id} />
    </div>
  );
};
