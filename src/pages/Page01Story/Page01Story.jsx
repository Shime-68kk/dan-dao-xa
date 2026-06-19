import Scene01Hero from "../../sections/page01/Scene01Hero/Scene01Hero.jsx";
import Scene02History from "../../sections/page01/Scene02History/Scene02History.jsx";
import Scene03Timeline from "../../sections/page01/Scene03Timeline/Scene03Timeline.jsx";
import Scene04LaborDecline from "../../sections/page01/Scene04LaborDecline/Scene04LaborDecline.jsx";
import Scene05NarrowingPressure from "../../sections/page01/Scene05NarrowingPressure/Scene05NarrowingPressure.jsx";
import Scene06CraftJourneyIntro from "../../sections/page01/Scene06CraftJourneyIntro/Scene06CraftJourneyIntro.jsx";
import Scene06CraftSteps from "../../sections/page01/Scene06CraftSteps/Scene06CraftSteps.jsx";
import Scene07WoodResonance from "../../sections/page01/Scene07WoodResonance/Scene07WoodResonance.jsx";
import Scene08LastLink from "../../sections/page01/Scene08LastLink/Scene08LastLink.jsx";
import Scene09FinalEcho from "../../sections/page01/Scene09FinalEcho/Scene09FinalEcho.jsx";
import Scene10SoundCulture from "../../sections/page01/Scene10SoundCulture/Scene10SoundCulture.jsx";
import Scene11ModernAudience from "../../sections/page01/Scene11ModernAudience/Scene11ModernAudience.jsx";
import Scene12TraditionalPresence from "../../sections/page01/Scene12TraditionalPresence/Scene12TraditionalPresence.jsx";
import Scene13FutureQuestion from "../../sections/page01/Scene13FutureQuestion/Scene13FutureQuestion.jsx";
import Scene14FutureContinuation from "../../sections/page01/Scene14FutureContinuation/Scene14FutureContinuation.jsx";
import Scene15FinalClosing from "../../sections/page01/Scene15FinalClosing/Scene15FinalClosing.jsx";
import bridgeHandsPhoto from "../../assets/page01/shared/bridge-hands-photo.webp";
import "./Page01Story.css";

export default function Page01Story() {
  return (
    <main className="page01-story" aria-label="Làng đàn Đào Xá">
      <Scene01Hero />
      <div className="scene01-scene02-bridge" aria-hidden="true">
        <div className="page01-bridge-hands">
          <img src={bridgeHandsPhoto} alt="" loading="eager" />
        </div>
      </div>
      <Scene02History />
      <Scene03Timeline />
      <Scene04LaborDecline />
      <Scene05NarrowingPressure />
      <Scene06CraftJourneyIntro />
      <Scene06CraftSteps />
      <Scene07WoodResonance />
      <Scene08LastLink />
      <Scene09FinalEcho />
      <Scene10SoundCulture />
      <Scene11ModernAudience />
      <Scene12TraditionalPresence />
      <Scene13FutureQuestion />
      <Scene14FutureContinuation />
      <Scene15FinalClosing />
    </main>
  );
}
