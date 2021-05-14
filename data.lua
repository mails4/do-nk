local M = {}


M.host="nil"
	
M.pick_t={"box3"}

M.move={}
M.move.released=0 M.move.released_time=0 M.move.pos=0 M.move.new_pos=0 M.move.max=0

M.data_table1={"","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","Ru","X","C","V","B","N","M"}
M.data_table2={""}
M.data_table3={""}
M.data_table4={""}
M.data_table5={"СЧЕТЫ"}
M.data_table6={"РЕЙТИНГ","НОВОСТИ","ИГРА"}

M.dots_table1={} M.dots_table2={} M.dots_table3={} M.dots_table4={} M.dots_table5={} M.dots_table6={}

--local a_f=gui.ADJUST_FIT local a_z=gui.ADJUST_ZOOM local a_s=gui.ADJUST_STRETCH
--local c_n=gui.CLIPPING_MODE_NONE local c_s=gui.CLIPPING_MODE_STENCIL

M.scene_1_1={1,1,		20,20,		-25,200,	50,-50,	"temp","temp1",			"word1",nil,
0,0,	{255,188,0,1},   {3,67,67,1},		nil,nil}

M.scene_1_2={1,1,		640,1200,	320,600,	50,-50,	"template","template",	"word_t",nil,
2,0,	{254,235,199,1}, {3,67,67,1},		nil,nil}

M.scene_1_3={1,1,		600,1160,	320,600,	50,-50,	"template","template",	"word_t",nil,
2,0,	{3,67,67,1},	 {3,67,67,1},		nil,nil}

M.scene_1_4={1,1,		640,1200,	320,600,	50,-50,	"template","template",	"word_t",nil,
2,0,	{254,235,199,1}, {3,67,67,1},	"main","Broken-Glass"}

M.scene_1_5={1,1,		0,0,		320,840,	0,-50,	"template","template",	"word_t",nil,
2,0,	{255,188,0,1}, 	 {255,188,0,1},		nil,nil}
M.scene_1_5a={1,1,	0,0,		322,838,	0,-50,	"template","template",	"word_t",nil,
2,0,	{101,35,35,1}, 	 {101,35,35,1},		nil,nil}

M.scene_1_6={1,1, 	0,0,  		320,300,  	0,-75, 	"template","template",	"word_t","Walsheim B1",   
2,0,	{255,188,0,1},   {255,188,0,1},		nil,nil}

M.data_t={}

return M
