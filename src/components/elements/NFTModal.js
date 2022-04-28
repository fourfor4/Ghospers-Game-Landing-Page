import React, { useEffect, useState, useRef } from 'react';

import './style.scss';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const nft1 = require('../../assets/images/nft1.png');
const nft2 = require('../../assets/images/nft2.png');
const nft3 = require('../../assets/images/nft3.png');
const nft4 = require('../../assets/images/nft4.png');
const nft5 = require('../../assets/images/nft5.png');
const nft6 = require('../../assets/images/nft6.png');
const nft7 = require('../../assets/images/nft7.png');
const nft8 = require('../../assets/images/nft8.png');
const nft9 = require('../../assets/images/nft9.png');
const nft10 = require('../../assets/images/nft10.png');
const nft11 = require('../../assets/images/nft11.png');
const nft12 = require('../../assets/images/nft12.png');
const nft13 = require('../../assets/images/nft13.png');
const nft14 = require('../../assets/images/nft14.png');
const nft15 = require('../../assets/images/nft15.png');
const nft16 = require('../../assets/images/nft16.png');
const nft17 = require('../../assets/images/nft17.png');
const nft18 = require('../../assets/images/nft18.png');

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid white',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
        backgroundColor: '#3f51b5',
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px var(--box-shadow)',
    },
}));


const DetailModal = ({openModal,setOpenModal,currentNFT}) => {
    const classes = useStyles();
    const unmounted = useRef(true);
    const [open, setOpen] = React.useState(false);
    const[nftList, setNftList] = React.useState(1);
    useEffect(()=>{
        setNftList(currentNFT)
    },[])
    const handleClose = () => {
        setOpenModal(false);
    };
    
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={"NFT-Modal"}
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
                <div className='modal-image-div'>
                    <CloseIcon className="closeBtn white-color"
                        onClick={()=>{
                            setOpenModal(false);
                        }}
                    />
                    <img
                    src={require(`../../assets/images/nft${nftList}.png`)}
                    />
                    <NavigateNextIcon className='nextBtn'
                        onClick={()=>{
                            if (nftList + 1 <19){

                                setNftList(nftList + 1)
                            }else {
                                setNftList(18)
                            }
                        }}
                    />
                    <NavigateBeforeIcon className='prevBtn'
                        onClick={()=>{
                            if (nftList - 1 > 1){

                                setNftList(nftList - 1)
                            }else {
                                setNftList(1);
                            }
                        }}
                    />
                </div>
        </Modal>
    );

}

export default DetailModal;