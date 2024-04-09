

import Card from "../../components/card";
import "./grid_metas.css";

export default function CardMetasDias({title, metas}) {
  return ( 
    <>
      <h3 className="grid-metas-title">{title}</h3>
      <div className='grid-metas-main'>
        {metas.map((meta, index) => (
            <Card className='grid-metas-meta-card' key={index}>
                <div className='grid-metas-meta-img-div'>
                    <div className='grid-metas-meta-img-value'>
                        {meta.value}
                    </div>
                    <img className='grid-metas-meta-img' src={meta.img}/>
                </div>
                <div className='grid-metas-meta-title'>{meta.title}</div>
            </Card>
        ))}
    </div>
    </>
  );
}