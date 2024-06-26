import PropTypes, { InferProps } from "prop-types";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AmenitiesCardPropTypes = {
  title: String,
  description: String,
  image: String,
  link: String
};

const ComponentPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;
const AmenitiesCard = ({ title, description, image, link }: ComponentTypes) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={"https://picsum.photos/seed/" + image + "/500"}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {link && <Button size="small" target="_blank" href={link.href}>{link.name}</Button>}
      </CardActions>
    </Card>
  );
}

AmenitiesCard.propTypes = AmenitiesCardPropTypes;

export default AmenitiesCard;