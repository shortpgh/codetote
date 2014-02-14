TMUX Commands:

##Reload Config after Changes
Inside of TMUX:

    PREFIX : source-file ~/.tmux.conf

##Scrolling
    PREFIX [
    type q to quit

##Panes

###Creating
    PREFIX %  vertical split
    PREFIX "  horizontal split
    PREFIX o  swap panes
    PREFIX q  show pane numbers
    PREFIX x  kill pane
    PREFIX +  break pane into window (e.g. to select text by mouse to copy)
    PREFIX -  restore pane from window
    PREFIX ⍽  space - toggle between layouts
    PREFIX q (Show pane numbers, when the numbers show up type the key to goto that pane)
    PREFIX { (Move the current pane left)
    PREFIX } (Move the current pane right)

###Resizing
    PREFIX : resize-pane (By default it resizes the current pane down)
    PREFIX : resize-pane -U (Resizes the current pane upward)
    PREFIX : resize-pane -L (Resizes the current pane left)
    PREFIX : resize-pane -R (Resizes the current pane right)
    PREFIX : resize-pane 20 (Resizes the current pane down by 20 cells)
    PREFIX : resize-pane -U 20 (Resizes the current pane upward by 20 cells)
    PREFIX : resize-pane -L 20 (Resizes the current pane left by 20 cells)
    PREFIX : resize-pane -R 20 (Resizes the current pane right by 20 cells)
    PREFIX : resize-pane -t 2 20 (Resizes the pane with the id of 2 down by 20 cells)
    PREFIX : resize-pane -t -L 20 (Resizes the pane with the id of 2 left by 20 cells)
