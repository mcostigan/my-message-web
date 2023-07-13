import {Injectable} from "@angular/core";

export interface IReaction {
  userId: string
  emotion: string
}

export class Reaction {
  readonly userId: string
  readonly emotion: Emotion


  constructor(userId: string, emotion: Emotion) {
    this.userId = userId;
    this.emotion = emotion;
  }
}

export abstract class Emotion {
  protected constructor(public emojiId: string, public serverId: string) {
  }
}

class Laughter extends Emotion {
  constructor() {
    super("laughing", "LAUGHING");
  }
}

class ThumbsUp extends Emotion {
  constructor() {
    super("thumbsup", "THUMBS_UP");
  }
}

class ThumbsDown extends Emotion {
  constructor() {
    super("thumbsdown", "THUMBS_DOWN");
  }
}

class Question extends Emotion {
  constructor() {
    super("laughter", "QUESTION");
  }
}

class Exclamation extends Emotion {
  constructor() {
    super("thumbsdown", "EXCLAMATION");
  }
}

class Heart extends Emotion {
  constructor() {
    super("laughter", "HEART");
  }
}

@Injectable({providedIn: 'root'})
export class EmotionFactory {

  get(name: string): Emotion {
    switch (name) {
      case "LAUGHING":
        return new Laughter()
      case "THUMBS_UP":
        return new ThumbsUp()
      case "THUMBS_DOWN":
        return new ThumbsDown()
      case "exclamation":
        return new Exclamation()
      case "question":
        return new Question()
      case "heart":
        return new Heart()
    }
    return new Laughter()
  }

  getAll(): Emotion[] {
    return [new Laughter(), new ThumbsDown(), new ThumbsUp()]
  }
}
