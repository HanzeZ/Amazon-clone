.product {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin:10px;
    padding:20px;
    width: 100%;
    max-height:400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;
}

.product__rating {
    display:flex;
}
.product > img {
    max-height: 200px;
    width: 100%;
    object-fit:contain;
    margin-bottom: 15px;
}
.product > button {
    background: #f0c14b;
    border: 1px solid;
    margin-top:10px;
    border-color: #a88734 #9c7e31 #846a29;
    color:#111;
}
.product__price {
    margin-top: 5px; 
}
.product__info {
    width: 100%;
    height:100px;
    margin-bottom: 15px;
}
