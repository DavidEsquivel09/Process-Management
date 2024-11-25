import Process from '../models/process.model.js';

const createProcess = async (req, res) => {
    try {
        const { title, startDate, endDate, details, status } = req.body;
        console.log(req.user);
        const newProcess = new Process({ title, startDate, endDate, details, status, user: req.user.id });
        const processSaved = await newProcess.save();
        res.json(processSaved);
    } catch (error) {
        return res.status(500).json({ message: "Error in creating process" });
    }
};

const getProcesses = async (req, res) => {
    try {
        const processes = await Process.find({ user: req.user.id }).populate('user');
        res.json(processes);
    } catch (error) {
        return res.status(500).json({ message: "Error in getting processes" });
    }
};

const getProcessById = async (req, res) => {
    try {
        const process = await Process.findById(req.params.id).populate('user');
        if (!process) return res.status(404).json({ message: "Process not found" });
        res.json(process);
    } catch (error) {
        return res.status(404).json({ message: "Error in getting process" });
    }
};

const updateProcess = async (req, res) => {
    // { new: true } is to return the updated process
    try {
        const process = await Process.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!process) return res.status(404).json({ message: "Process not found" });
        res.json(process);
    } catch (error) {
        return res.status(404).json({ message: "Error in updating process" });
    }
};

const deleteProcess = async (req, res) => {
    try {
        const process = await Process.findByIdAndDelete(req.params.id);
        if (!process) return res.status(404).json({ message: "Process not found" });
        res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Error in deleting process" });
    }
};

export { createProcess, getProcesses, getProcessById, updateProcess, deleteProcess };