export interface ICard {
  id: string;
  name: string;
  attribute: string;
  type: string;
  card_images: Array<{
    id: string;
    image_url: string;
    image_url_small: string;
  }>;
}
