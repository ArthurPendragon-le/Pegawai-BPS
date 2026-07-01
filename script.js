const l=document.getElementById('list'),
t=document.getElementById('total'),
c=document.getElementById('cari');
function r(d){l.innerHTML='';
    t.textContent='Total Pegawai: '+d.length;if(!d.length)
        {l.innerHTML='<div class="text-danger">Data tidak ditemukan</div>';return;}
    d.forEach(p=>l.innerHTML+=`<div class='col-md-6'><div class='card pegawai'><div class='card-body'><h5>${p.nama}</h5><span class='badge bg-primary'>${p.jabatan}</span></div></div></div>`)}
    r(pegawai);c.oninput=()=>{let k=c.value.toLowerCase();r(pegawai.filter(x=>x.nama.toLowerCase().includes(k)||x.jabatan.toLowerCase().includes(k)));};