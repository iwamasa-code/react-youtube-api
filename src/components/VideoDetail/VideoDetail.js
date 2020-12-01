import React, { useContext } from "react";
import { Store } from "../../store/index";
import { VideoPlay } from "../VideoPlay/VideoPlay";
import Style from "./VideoDetail.module.scss";
import Linkify from "react-linkify";

export const VideoDetail = () => {
  const { globalState } = useContext(Store);

  //三項演算子を使って、globalState.selectedがある時には動画を表示し、無い時にはno dataと表示する
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>no data</span>
  );
};

// <hr />・・・境界線の表示
// <pre></pre> ・・・成形済の文字をそのまま表示したい場合には<p></p>よりも<pre></pre>の方が都合がいい。
