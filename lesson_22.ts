/**
 * Различные устройства могут быть вставлены в материнскую плату, могут быть различные комбинации этих устройств.
 * К тому же, родительские сущности разных устройств, автономны и каждый играет свою роль.
 * */

class Processor {
}

class VideoCard {
}

class Ram {
}

class Motherboard {
  public processor: Processor;
  public videoCard: VideoCard;
  public ram: Ram;

  constructor(processor: Processor, videoCard: VideoCard, ram: Ram) {
    this.processor = processor;
    this.videoCard = videoCard;
    this.ram = ram;
  }
}

class AmdProcessor extends Processor {
}

class AbcVideoCard extends VideoCard {
}

class XyzRam extends Ram {
}

class AtxMotherboard extends Motherboard {
  constructor() {
    super(AmdProcessor, AbcVideoCard, XyzRam);
  }
}

